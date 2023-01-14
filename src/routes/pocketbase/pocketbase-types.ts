/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
	Messages = 'messages',
	Users = 'users'
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;

// System fields
export type BaseSystemFields = {
	id: RecordIdString;
	created: IsoDateString;
	updated: IsoDateString;
	collectionId: string;
	collectionName: Collections;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	expand?: { [key: string]: any };
};

export type AuthSystemFields = {
	email: string;
	emailVisibility: boolean;
	username: string;
	verified: boolean;
} & BaseSystemFields;

// Record types for each collection

export type MessagesRecord = {
	user: RecordIdString;
	text?: string;
};

export type UsersRecord = {
	name?: string;
	avatar?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type MessagesResponse = MessagesRecord & BaseSystemFields;
export type UsersResponse = UsersRecord & AuthSystemFields;

export type CollectionRecords = {
	messages: MessagesRecord;
	users: UsersRecord;
};
