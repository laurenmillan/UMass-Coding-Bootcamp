# Broken App Issues
    - I changed let and var to const variables to ensure these variables could not be reassigned.
    - I moved the server to its own file to decrease clutter in the app file.
    - I added Morgan middleware and placed this in its own file.
    - I moved the RESTful route into a userRoute file to keep files and the logic organized.
    - I added axios, express and Morgan as dependencies to the package.json file.
    - I added a 404 error handler in the app.js file.
    - I refactored the logic for the POST route.
    - I used Express router to separate the route without cluttering the app.js file 