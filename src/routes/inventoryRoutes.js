const express = require("express");

const router = express.Router();

const validateItem = require("../middleware/validateItem");

const {
    getItems,
    searchItems,
    filterItems,
    createItem,
    getItemById,
    updateItemById,
    patchItemById,
    deleteItemById,
} = require("../controllers/inventoryController");

router.get("/", getItems);
router.get('/search', searchItems);
router.get('/filter', filterItems);
router.post("/", validateItem, createItem);
router.get("/:id", getItemById);
router.put("/:id", validateItem, updateItemById);
router.patch("/:id", patchItemById);
router.delete("/:id", deleteItemById);

router.get('/test-error', (req, res) => {
    throw new Error('Something went wrong');
});

module.exports = router;