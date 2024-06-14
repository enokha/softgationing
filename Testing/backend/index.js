require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Require the users route module
const userRoutes = require('./routes/users');

// Use the routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
