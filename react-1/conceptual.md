### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

-__React is a Front-end JS framework that allows developers to build user interfaces(UIs). It makes it easy for developers to build reusable components of code (ie: buttons, media, etc)__. 

- What is Babel?

-__Babel is a JS compiler that developers use to turn JS code into usable code so it can be used across several ranges of platforms__. 

- What is JSX?

-__JSX stands for JavaScript Syntax Extension and is a syntax extension used with React to render user interfaces. It allows developers to write legal JS code. JSX is the recommended way to define components in React apps. It is great for building dynamic UIs__.

- How is a Component created in React?

-__Components are building blocks in React, They are pieces of UI logic, functions that know how to return HTML to render. They are created as functions or classes that define the structure of a specific part of the UI, then it returns a JSX element__.

- What are some difference between state and props?

-__State allows developers to have data that changes within a given component; allows for change. State is initialized in the constructor using the useState() hook in the component. It returns an array with two values: what the piece of state is, and a function to change it. Props are used to pass data from a parent to a child component. Props are esentially key-value pairs that can be passed as an argument to a component__.

- What does "downward data flow" refer to in React?

-__It refers to the concept that data should be passed from a parent to child components using props. It helps to maintain simple, clean and reusable components__.

- What is a controlled component?

-__A controlled component manages its state via props and responds to user input through callbacks The value of the component relies on the parent component__.

- What is an uncontrolled component?

-__An uncontrolled component manages its own state internally and does not rely on props from a parent component.__.

- What is the purpose of the `key` prop when rendering a list of components?

-__The purpose of the `key` prop is used to provide a unique identifier for each element in a list of components. It allows React to keep track of components that have been changed or added__.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

-__Using an array index over a `key` can lead to performance problems and unexpected behavior. The array index may change over time and is not a unique identifier for each item in a list of components__.

- Describe useEffect.  What use cases is it used for in React components?

-__useEffect is a hook that allows developers to perform side effects in functional components. A side effect is something that changes the DOM, making a network request, or setting a timer or interval. useEffect accepts two arguments: a function which is the side effect you want it to run, and second is specifying when it should run. It is used to fetch data from an API, adding event listeners, adding animation to the page, or managing subscriptions__.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

-__useRef is a React hook that allows developers to create a mutable value that persists across re-renders of a component. It returns an object and can be used to store a value. A developer can use it to reference DOM elements without causing re-renders that would otherwise be unnecessary__.

- When would you use a ref? When wouldn't you use one?

-__A devloper could use a ref to create focus on an input element when a button is clicked or to change focus to a different part of the UI when a component is rendered. They can also be used for animations and media playback__.

- What is a custom hook in React? When would you want to write one?

-__A custom hook in React utilizes the React hook(s) to contain specific functionality. It allows developers to remove and reuse logic across multiple components in the app without cluttering or duplicating code. It is written using a function that uses one of the hooks, then returns data to be used in another component in the application. They may be used to fetch data from an API, manage state, or manage local storage__.
