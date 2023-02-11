Bug 1- In middleware/auth.js, there was no token validation - this was added.

Bug 2- In the /models/users.js file, the function getAll() returns all the user's information, including phone number and email address. The bug was fixed in the SQL query.

Bug 3- In the /routes/users.js file, specifically the GET route, the function get(/:username) should have a 404 response error when a username cannot be located. The issue was fixed by adding the ExpressError handler.

Bug 4- In the POST route in /routes/auth.js file, the function 
post(/login) was missing the 'await' keyword.

Bug 5- In the app.js file, module.exports was written twice in the code. I deleted one of the duplicates.
