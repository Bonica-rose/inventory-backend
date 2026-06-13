const validateItem = (req, res, next) => {
    const { name, category, quantity, price } = req.body;

    if (!name || !category || quantity == null || price == null) {
        return res.status(400).json({
            message: "Required fields missing"
        });
    }

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Item name is required",
        });
    }

    if (!category) {
        return res.status(400).json({
            success: false,
            message: "Item category is required",
        });
    }

    if (quantity === undefined || Number(quantity) < 0) {
        return res.status(400).json({
            success: false,
            message: "Valid quantity is required",
        });
    }

    if (price === undefined || Number(price) < 0) {
        return res.status(400).json({
            success: false,
            message: "Valid price is required",
        });
    }

    next();
};

module.exports = validateItem;