const express = require('express');
const cors = require('cors');

const errorHandler = require('./middleware/errorHandler');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// API Routes
app.use('/api/items', inventoryRoutes);

// 404 Error Handler
app.use((req, res) => {
    res.status(404).send(`
        <div style="
            display: flex; 
            flex-direction: column;
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            font-family: system-ui, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
        ">
            <h1 style="font-size: 4rem; margin: 0; color: #ff4757;">404</h1>
            <h2 style="font-size: 1.5rem; margin: 10px 0 0 0;">Not Found</h2>
            <p style="color: #777;">The requested route does not exist.</p>
        </div>
    `);
});

// Error handler
app.use(errorHandler);

module.exports = app;