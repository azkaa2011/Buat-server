const express = require('express');
const app = express();

// Endpoint API
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

// Serve frontend
app.use(express.static(__dirname));

module.exports = app;
