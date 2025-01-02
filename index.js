const express = require('express');
const app = express();

// Endpoint backend
app.get('/api/message', (req, res) => {
  res.json({ message: 'Halo dari Backend!' });
});

module.exports = app;