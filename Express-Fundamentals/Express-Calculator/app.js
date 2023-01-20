// this looks for a package called express
const express = require('express');

// then execute Express as a function and store the return value in app
const app = express();

// this tells Express to parse request body for either form data or JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', (req, res) => {
	res.send();
});

// app.get('/median', (req, res) => {
// 	console.log('/median');
// });

// app.get('/mode', (req, res) => {
// 	console.log('/mode');
// });

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
