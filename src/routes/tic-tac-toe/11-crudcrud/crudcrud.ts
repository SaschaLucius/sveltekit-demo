import { browser } from '$app/environment';

export let _apiKey: string;
export let _requests: { executedRequests: number; maxRequests: number }; // has side effects
export let _resourceId: string;
export let _resource: resourceType;
export const _resourceName = 'board';
export const _leftoverRequests = 10;

export type statusType = { _newAccount: string; _newResourceId: string };
export type resourceType = { a: number };
export type resultType = { data: resourceType; status?: statusType };

export function setValues(
	apiKey: string,
	resourceId: string,
	requests: { executedRequests: number; maxRequests: number }
): void {
	_apiKey = apiKey;
	_resourceId = resourceId;
	_requests = requests;
}

function handleError(error: Error) {
	console.log(error);
}

export async function initialize(resource: resourceType): Promise<void> {
	try {
		if (browser) {
			const previousApiKey = localStorage.getItem('crudCrudApiKey');
			const previousResourceId = localStorage.getItem('crudCrud' + _resourceName + 'Id');
			if (previousApiKey && previousResourceId) {
				console.log('use existing account');
				_apiKey = previousApiKey;
				_resourceId = previousResourceId;
				_requests = await getExecutedRequests(_apiKey);
				if (_requests.executedRequests < _requests.maxRequests - 3) {
					_resource = (await read(_apiKey, _resourceId)).data;
				} else {
					console.log('not enough requests to fetch the resource');
				}
				return;
			}
			// should not be executed during build time
			console.log('create new account');
			_apiKey = await createAccount();
			console.log('create new account2');
			_requests = await getExecutedRequests(_apiKey);
			console.log('create new account3');
			_resourceId = await createResource(_apiKey, resource);
			console.log('create new account4');
			_resource = (await read(_apiKey, _resourceId)).data;
			console.log('create new account5');
		}
		console.log('no initialization during build time');
	} catch (e) {
		console.error(e);
	}
}

/**
 * Violates CrudCruds Conditions of Use, so disable auto transfer for now
 * @param apiKey
 * @param resourceId
 */
export async function transferAccount(
	apiKey: string,
	resourceId: string
): Promise<{
	apiKey: string;
	resourceId: string;
	requests: { executedRequests: number; maxRequests: number };
}> {
	try {
		const oldResource = await read(apiKey, resourceId);
		const newApiKey = await createAccount();
		const newResourceId = await createResource(newApiKey, oldResource.data);
		const executedRequests = await getExecutedRequests(newApiKey);
		const newResource = await (await read(newApiKey, newResourceId)).data;
		if (JSON.stringify(oldResource) !== JSON.stringify(newResource)) {
			console.error('Account transfer corrupted data');
			console.error(oldResource, ' vs ' + newResource);
		}
		update(apiKey, resourceId, newResource, {
			_newAccount: newApiKey,
			_newResourceId: newResourceId
		});
		return { apiKey: newApiKey, resourceId: newResourceId, requests: executedRequests };
	} catch (e) {
		console.error(e);
		console.error('fallback to old account');
		const requests = await getExecutedRequests(apiKey);
		return { apiKey, resourceId, requests };
	}
}

export function createAccount(): Promise<string> {
	return fetch('https://crudcrud.com/')
		.then((res) => res.text())
		.then((html) => {
			const regex = /([a-z,0-9]{32})/;
			const apiKeys = html.match(regex);
			return apiKeys![1];
		});
}

export function getExecutedRequests(apiKey: string): Promise<{
	executedRequests: number;
	maxRequests: number;
}> {
	return fetch('https://crudcrud.com/Dashboard/' + apiKey)
		.then((res) => res.text())
		.then((html) => {
			const regex = /([0-9]*)\s\/\s([0-9]*)/;
			const requests = html.match(regex);
			return { executedRequests: +requests![1], maxRequests: +requests![2] };
		});
}

export function createResource(apiKey: string, resource: resourceType): Promise<string> {
	return fetch('https://crudcrud.com/api/' + apiKey + '/' + _resourceName, {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'POST',
		body: JSON.stringify(resource)
	})
		.then((res) => res.json())
		.then((json) => {
			_requests.executedRequests++;
			return json._id;
		});
}

export function read(apiKey: string, resourceId: string): Promise<resultType> {
	return fetch('https://crudcrud.com/api/' + apiKey + '/' + _resourceName + '/' + resourceId)
		.then((res) => res.json()) // on error 'Endpoint has exceeded allowed number of requests'
		.then((json) => {
			_requests.executedRequests++;
			delete json._id;
			return json;
		});
}

export function update(
	apiKey: string,
	resourceId: string,
	resource: resourceType,
	status?: statusType
): Promise<void> {
	return fetch('https://crudcrud.com/api/' + apiKey + '/' + _resourceName + '/' + resourceId, {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		method: 'PUT',
		body: JSON.stringify({ data: resource, status })
	}).then(() => {
		_requests.executedRequests++;
	});
}
