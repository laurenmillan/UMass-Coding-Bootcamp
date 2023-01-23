// we move our server to a separate file in order to run tests
const app = require('./app');

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
