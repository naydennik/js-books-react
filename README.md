<img src="https://firebearstudio.com/blog/wp-content/uploads/2016/01/Best-Node.JS-Books-1024x551.jpg" title="JS Books" alt="JS Books">

# JS Books

A simple app for creating and viewing books dedicated to Javascript

## Quick description

To enter the app everyone has to register and login first.
There are two types of users - regular and admins.
Regular users can only view the list with already created books. To test the regular users experience please create a new account.
The admins have the right to create, edit and delete books. To test the admin users experience please use these credentials:

### username: user1, password: 12345

## Used technology

This project was generated with React.js. For fetching data is used axios and for better UI - bootstrap.

## Architecture

1. Components Folder - containing reusable elements;

2. Config Folder - containing necessary information for fetching data from server and authenticating the users;

3. Routing Folder - containing all necessary for creating routes including protected routes;

4. Services Folder:

   - authService - responsible for registration, logging in and logging out processes;
   - booksService - responsible for all functionality for showing, creating, editing and deleting the books;
   - loginValidator - validating the login form;
   - registerValidator - validating the register form;
   - patterns - regex patterns used for the different validations;

5. Pages Folder - in different subfolders are all app's pages with programming logic, html and css;

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
```

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
