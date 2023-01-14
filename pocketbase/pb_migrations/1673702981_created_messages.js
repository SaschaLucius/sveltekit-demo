migrate(
	(db) => {
		const collection = new Collection({
			id: 'cvxcaep27i04zuq',
			created: '2023-01-14 13:29:41.714Z',
			updated: '2023-01-14 13:29:41.714Z',
			name: 'messages',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'bixgfyzn',
					name: 'user',
					type: 'relation',
					required: true,
					unique: false,
					options: {
						maxSelect: 1,
						collectionId: '_pb_users_auth_',
						cascadeDelete: false
					}
				},
				{
					system: false,
					id: 'hrm9whie',
					name: 'text',
					type: 'text',
					required: false,
					unique: false,
					options: {
						min: null,
						max: null,
						pattern: ''
					}
				}
			],
			listRule: '',
			viewRule: '',
			createRule: '',
			updateRule: '',
			deleteRule: '',
			options: {}
		});

		return Dao(db).saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('cvxcaep27i04zuq');

		return dao.deleteCollection(collection);
	}
);
