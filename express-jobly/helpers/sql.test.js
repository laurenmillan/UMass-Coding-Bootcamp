const { sqlForPartialUpdate } = require('./sql');

describe('Test sqlForPartialUpdate function', () => {
	test('returns {setCols, values}', () => {
		const dataToUpdate = { firstName: 'John', lastName: 'Smith', email: 'jsmith@gmail.com' };
		const jsToSql = { firstName: 'first_name', lastName: 'last_name', isAdmin: 'is_admin' };
		const toSql = sqlForPartialUpdate(dataToUpdate, jsToSql);
		expect(toSql).toEqual({
			setCols: '"first_name"=$1, "last_name"=$2, "email"=$3',
			values: [ 'John', 'Smith', 'jsmith@gmail.com' ]
		});
	});
});
