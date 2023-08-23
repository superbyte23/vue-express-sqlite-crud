const express = require('express');
const cors = require('cors');
const cookie_parser = require('cors');
const session = require("express-session");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Middleware for parsing cookies
app.use(cookie_parser()); 
// Middleware
app.use(cors()); 
// Set up session middleware
app.use(
  session({
    secret: 'your-secret-key', // Replace with your own secret key for session encryption
    resave: false,
    saveUninitialized: false
  })
); 
// Routes
// Define an array of route names
const routeNames = ['students', 'courses', 'users', 'posts', 'departments', 'employees']; 
// Iterate over the route names array
routeNames.forEach(routeName => {
  // Dynamically require the route file
  const route = require(`./routes/${routeName}`); 
  // Register the route with the app
  app.use(`/${routeName}`, route); 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
