# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
**Assignment Requirement**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Backend

The backend for the application has been created for you. Download and unzip backend.zip  Download backend.zip. Run npm install in the backend directory, this will install the necessary packages for the backend to work. Run the backend with the command node index.js. This will run a server on port 3001 that makes available routes (i.e. an API) which allow you to search, read, create, update and destroy pets in a pet inventory.

Each time you run the backend, it will create the same initial pet inventory database (kept in-memory, using SQLite, a database similar to MySQL). So if you ever want to "start with a fresh backend/database", all you need to do is stop the backend (e.g. Ctrl-C from the command-line) and run the backend again with node index.js.

The backend server API is accessed with the following routes and URL parameters, using a GET request... these links should work if you have the backend running on your machine:

Get all pets in inventory
http://localhost:3001/api?act=getall (Links to an external site.)
Update a pet
http://localhost:3001/api?act=update&id=1&animal=Parrot&description=Green&age=6&price=550.95 (Links to an external site.)
Delete a pet
http://localhost:3001/api?act=delete&id=3 (Links to an external site.)
Add a pet
http://localhost:3001/api?act=add&animal=Dog&description=Dalmatian&age=3&price=103.45 (Links to an external site.)
Search for a pet
http://localhost:3001/api?act=search&term=friendly%20with (Links to an external site.)
Your ReactJS app must make AJAX requests with the correct URL and URL parameters to carry out the actions needed. See the frontend starter code for a functioning example of making AJAX requests to this backend from a frontend React application.

As an aside, normally operations that modify state such as update, delete and add operations would not be available via GET requests for security reasons. We do so you can test things easily in the browser (and because the focus for you is on ReactJS).

 

**Frontend Starter Code

You are being provided with a fair amount of "starter code" for this assignment. The frontend has been created with create-react-app.  Download and unzip frontend.zip  Download frontend.zip. 

Run npm install in the frontend directory, this will install the necessary packages for the frontend to work. The frontend code depends on the backend server to be already running, so before starting the frontend, make sure to start the backend using the instructions above.  You can open up two command-lines or two tabs in a single command-line to run both the backend and frontend at once.  Once you have the backend running, you can run the frontend with the command npm start.

The frontend starter code includes functioning examples of making all the possible AJAX requests to the backend and displaying data from the get all pets and search for a pet requests.  We will go over this code in-class.  You can use this code as a starting point for your own application, which must meet the below requirements.  

 

**Requirements

Create an frontend that manages the Pet Store data using the backend server provided.  The backend should not be modified in any way... you will only submit the frontend code and your code will be tested with the existing backend.  Your application must include the following features:  

Present the pet inventory data in a nicely formatted table.  The pet inventory table should have columns for animal, description, age and price (do not display the id).  Each row in the table should be for a pet in the pet inventory.  

Allow the user to delete a pet from the inventory by clicking a delete link provided in each row of the table.

Allow the user to add a pet by filling out a form with data and clicking submit.  The form should allow the user to enter the animal, description, age, and price.  The id for each animal is generated by the backend

Allow the user to search the pet inventory by entering a search term into an input textbox that is blank when the page first loads.  As each character of the search term is entered into the textbox by the user, the table of pet inventory data should be filtered to present only those pets returned by the server for the search term.  If the textbox is made blank again by deleting all entered characters, then all the pets in the inventory should be displayed in the table again.

All of the above should be implemented using the provided backend and AJAX in the expected ways.  Use only function components with hooks and effects as required to implement this functionality.  Style the application (table, buttons, form inputs) using Material-UI.  
