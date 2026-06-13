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

// GET /api/items/:id
const getItemById = (req, res) => {
    const id = Number(req.params.id);

    const inventory = inventories.find(
        item => item.id === id
    );

    if (!inventory) {
        return res.status(404).json({
            success: false,
            message: "Item not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: inventory,
    });
};

// PUT /api/items/:id
const updateItemById = (req, res) => {
    const id = Number(req.params.id);

    const index = inventories.findIndex(
        inventory => inventory.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Item not found",
        });
    }

    const { name, category, quantity, price }  = req.body;

    inventories[index] = {
        id,
        name,
        category,
        quantity,
        price
    };

    return res.status(200).json({
        success: true,
        message: "Item updated successfully",
        data: inventories[index],
    });
};

// PATCH /api/items/:id
const patchItemById = (req, res) => {
    const id = Number(req.params.id);

    const inventory = inventories.find(
        item => item.id === id
    );

    if (!inventory) {
        return res.status(404).json({
            success: false,
            message: "Item not found",
        });
    }

    if (req.body.name) inventory.name = req.body.name
    if (req.body.category) inventory.category = req.body.category
    if (req.body.quantity) inventory.quantity = req.body.quantity
    if (req.body.price) inventory.price = req.body.price

    return res.status(200).json({
        success: true,
        message: "Item partially updated",
        data: inventory,
    });
};

// DELETE /api/items/:id
const deleteItemById = (req, res) => {
    const id = Number(req.params.id);

    const index = inventories.findIndex(
        item => item.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Item not found",
        });
    }

    inventories.splice(index, 1);

    return res.status(204).json({
        success: true,
        message: "Item deleted successfully"
    });
};

module.exports = {
    getItems,
    createItem,
    getItemById,
    updateItemById,
    patchItemById,
    deleteItemById
};