### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  -We can use asynchronous callbacks to handle async code. We use the async keyword placed before a function and await makes JS wait until the promise returns the value.

- What is a Promise?

  - A Promise in JS is a one-time guarntee of a future value. A Promise can be one of three states: Pending, Resolved, Rejected. Axios makes the Promise and returns it; its initial state is Pending; async always returns a Promise.

- What are the differences between an async function and a regular function?

  -An async function will always return a Promise; it returns the value asynchronously. While other values are wrapped in a resolved promise automatically. Async functions should be used opposed to regular functions when dealing with a large number of iterations.

- What is the difference between Node.js and Express.js?

  -Node.js allows you to return JS on the server side. It also has add-on libraries via npm. It is used for frontend and backend.
  -Express.js is a Node framework, similar to Flask (Python framework). It allows you to build Express web servers and APIs.

- What is the error-first callback pattern?

  -The error-first callback pattern is a function that either returns an error object or successful data returned by the function. The first argument in the function is reserved for the error object. The second argument is reserved for successful data returned. If an error did not occur, the error object will be set to null.

- What is middleware?

  -Middleware is code that runs in the middle of the request/response cycle. In Express, middleware are functions that get access to the req & res objects and can also call the next function. Middleware goes in a separate file to keep the main app.js clean and organized.

- What does the `next` function do?

  -`next` is a parameter that allows Express to move to the next thing (ie: the route handler or error handler).

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  -We can make a global variable called baseUrl and set the github base url equal to the variable baseUrl. const baseUrl = 'https://api.github.com/users'
  -Then create a template literal for ${baseUrl} for each user.
  -Then call the function outside the async function instead of returning an array of users.
  -We could use axios instead of JSON.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
