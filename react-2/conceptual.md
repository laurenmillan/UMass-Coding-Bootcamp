### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

-__It handles the mapping between what is in the URL bar and what components a user sees.__

- What is a single page application?

-__It is a web app that loads its content dynamically and updates the page without reloading the whole page.__

- What are some differences between client side and server side routing?

-__Client side routing is handled by the web browser and JS runs on the client-side. It is usually used in single page apps.__
-__Server side routing is handled by the web server. It is usually used in traditional multi-page apps.__

- What are two ways of handling redirects with React Router? When would you use each?

-__A developer may use the <Redirect> component to render a redirect to a specified route. May also used history.push(), which is a method to programmatically navigate to a new route.__

- What are two different ways to handle page-not-found user experiences using React Router?

-__One way is to define a Route with no path in Router configuration. This route will match any URL that doesn't match any other routes, it can render a 404 page or redirect to another page. The second way is to use a Redirect component to redirect the user to a specific page.__

- How do you grab URL parameters from within a component using React Router?

-__Access URL params using the useParams hook.__

- What is context in React? When would you use it?

-__Context is a feature that allows data to be passed down the component tree without the need to pass props manually at every level. It provides a way to share data between components that are not directly related through the tree. It is useful where multiiple components need to share the same data.__

- Describe some differences between class-based components and function
  components in React.

-__Class-based components are defined using a class and extend the React.Component class. They have access to state through the this.state property. Function components are defined using a function, and have access to state through the useState hook.__

- What are some of the problems that hooks were designed to solve?

-__Hooks were designed to make it easier to write usable and more understandable code by allowing developers to break down complex logic into smaller and manageable pieces.__