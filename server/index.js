const express = require('express');
const app = express();

// import the path module to construct the absolute path to the static assets folder
const path = require('path');

// construct the absolute path to the static assets folder using the `path.join()` method
// use '../' to navigate to a parent directory, similar to when you are using `cd`.
const pathToDistFolder = path.join(__dirname, '../react-hw/dist');

// create the middleware function for serving static assets
const serveStatic = express.static(pathToDistFolder);

// middleware function for logging route requests
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // passes the request to the next middleware/controller
};

// controller function for serving a hello message
const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`Hello, ${name}!`);
};

// register the logRoutes middleware globally to log all requests
app.use(logRoutes);
// use the middleware function to serve static assets
app.use(serveStatic);

// register the serveHello controller for the /api/hello route
app.get('/api/hello', serveHello);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
