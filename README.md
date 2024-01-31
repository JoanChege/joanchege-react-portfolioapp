# React Portfolio link: https://joanchege.github.io/joanchege-react-portfolioapp/ 
# Questions
1.What is NPM? Node Package Manager is  a package manager for JavaScript software. It allows developers to install and use third-party libraries.

2.What is SPA? Single Page Application is a web application that loads single HTML page intially and then dynamically updates the contents without loading the entire page.This creates a smoother and more responsive user experience.

3.What is the event loop? The event loop is a fundamental concept in JavaScript that manages asynchronous operations. It continuously checks for events (user interactions, network requests, etc.) and schedules functions to execute in response. This asynchronous approach allows web applications to remain responsive even while performing tasks in the background.

4.What is the difference between export x and export default x? How do you import them differently? export x- Exports a named variable or function while export default x- Exports a single default value from a module.

5.Why do you use className as a property in React and not class? This is done to avoid conflicts with HTML class names.

6.Why should you not write the following? What will happen?
<button onClick={setCounter(counter + 1)}> +1 </button> This is incorrect onclick handling, the code above executes immediately when the component renders and not when the button is clicked.

7.What is object deconstruction and how is it connected to React components (example)? It is a JavaScript syntax to extract values from objects into distinct variables.

8.How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood? React uses JSX, a syntax extension that allows writing HTML-like structures within JavaScript code.

9.What is async/await? Bring an example. It is a feature for handling asynchronous operations in a more readable, synchronous-like way.
async function fetchData(){
    const response = await fetch('https://api.portfolio.com/data)
    const data = await response.json();
    return data;
}

10.What is a Promise? Bring an example. It is a an object representing the eventual result of an asynchronous operation which coulde either be a success or failure.
fetch('https://api.portfolio.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
