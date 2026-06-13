const express = require('express');

const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// API Routes
app.use('/api/items', inventoryRoutes);

module.exports = app;