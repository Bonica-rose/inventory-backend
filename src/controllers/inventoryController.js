const inventories = require("../models/inventory");

// GET /api/items
const getItems = (req, res) => {
    let result = [...inventories];

    return res.status(200).json({
        success: true,
        count: result.length,
        data: result,
    });
};

// POST /api/items
const createItem = (req, res) => {
    const { name, category, quantity, price } = req.body;

    const newItem = {
        id:
            inventories.length > 0
                ? inventories[inventories.length - 1].id + 1
                : 1,
        name,
        category,
        quantity,
        price
    };

    inventories.push(newItem);

    return res.status(201).json({
        success: true,
        message: "Item created successfully",
        data: newItem,
    });
};

module.exports = {
    getItems,
};