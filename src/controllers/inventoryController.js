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

module.exports = {
    getItems,
};