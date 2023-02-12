Bug 1- In the /routes/users.js file, specifically the GET route, the function get(/:username) should have a 404 response error when a username cannot be located. The issue was fixed by adding the ExpressError handler.

Bug 2- In middleware/auth.js file, the authUser function, token validation was missing - this was added.

Bug 3- In the /models/user.js file, the function getAll() returns all the user's information, including phone number and email address. The bug was fixed in the SQL query.

Bug 4- In the POST route in /routes/auth.js file, the function 
post(/login) was missing the 'await' keyword.

Bug 5- (This bug did not effect the way the app functioned) In the app.js file, module.exports was written twice in the code. I deleted one of the duplicates.

Bug 6- Removed the requireAdmin param from the PATCH route(/:username) in the /routes/users.js file. This allows the user to edit their information. The requireAdmin was preventing the user from editing their information.
