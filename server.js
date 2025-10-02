const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const routes = require('./src/routes/routes');
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Use the routes defined in routes.js
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});