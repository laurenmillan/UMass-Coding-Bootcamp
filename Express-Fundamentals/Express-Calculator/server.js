// this looks for a package called express
const express = require('express');

// then execute Express as a function and store the return value in app
const app = express();

// this tells Express to parse request body for either form data or JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Home');
});

app.post('/cats', function createCat(req, res) {
	res.send('you created a new cat (post request)');
});

app.get('/cats', (req, res) => {
	res.send('meow meow (get request) ');
});

app.delete('/cats', (req, res) => {
	res.send('meow meow (delete request) ');
});

app.get('/show-headers', (req, res) => {
	console.log(req.rawHeaders);
	console.log(req.headers);
	res.send(req.headers);
});

// START THE SERVER: call app.listen, which asks for a port as the
//  first argument; 3000 is standard, then the callback function
// this function goes at the bottom of the app
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
