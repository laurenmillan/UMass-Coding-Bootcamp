/** Database setup for BizTime. */

const { Client } = require('pg');

let DB_URI;

// two databases, one for testing, and the other is the db we created

if (process.env.NODE_ENV === 'test') {
	DB_URI = 'postgresql:///biztime_test';
} else {
	DB_URI = 'postgresql:///biztime';
}

// connectionString is the property name. DB_URI is passed in as an object
let db = new Client({
	connectionString: DB_URI
});

db.connect();

module.exports = db;
