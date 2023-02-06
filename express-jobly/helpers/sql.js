const { BadRequestError } = require('../expressError');

// Changes JSON object to SQL query by the map method and join operation

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
	const keys = Object.keys(dataToUpdate);
	if (keys.length === 0) throw new BadRequestError('No data');

	// {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
	const cols = keys.map((colName, idx) => `"${jsToSql[colName] || colName}"=$${idx + 1}`);

	// returns a JSON object value of SQL query
	return {
		setCols: cols.join(', '),
		values: Object.values(dataToUpdate)
	};
}

module.exports = { sqlForPartialUpdate };
