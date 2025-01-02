// Import necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

// A simple route
app.get('/', (req, res) => {
  res.send('Welcome to your Express Server!');
});

// Another route for demonstration
app.get('/about', (req, res) => {
  res.json({
    message: 'This is a basic Express server example.',
    author: 'Your Name',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
