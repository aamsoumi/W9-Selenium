const express = require('express'); // Import express
const path = require('path'); // Import path module for path manipulation

const app = express();// Create an instance of express
const port = 5001; // this is the port number for the server

// Serve static files from the 'Public' directory and its subdirectories
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => { // route to serve the index.html file
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
  // Serve the index.html file
});

app.get('/selection', (req, res) => { // route to serve the index.html file
  res.sendFile(path.join(__dirname, 'Public', 'Selection.html'));
  // Serve the index.html file
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  // Start the server
});


