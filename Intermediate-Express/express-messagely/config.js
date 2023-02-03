/** Common config for message.ly */

// read .env files and make environmental variables

require('dotenv').config();

const DB_URI = process.env.NODE_ENV === 'test' ? 'postgresql:///messagely_test' : 'postgresql:///messagely';

const SECRET_KEY =
	process.env.SECRET_KEY ||
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRvZGQiLCJpYXQiOjE2NzUzNjc3OTd9.-bRU7wpvNWZcXlGd8ueOIl9Lj4dlDGPaqIK588ETgdY';

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
	DB_URI,
	SECRET_KEY,
	BCRYPT_WORK_FACTOR
};
