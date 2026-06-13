const express = require('express');
const cors = require('cors');

const errorHandler = require('./middleware/errorHandler');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// API Routes
app.use('/api/items', inventoryRoutes);

// 404 handler
app.use((req, res, next) => {
    const error = new Error(`Route not found: ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
});

// Error handler
app.use(errorHandler);

module.exports = app;