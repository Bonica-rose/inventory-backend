const express = require("express");

const router = express.Router();

const validateItem = require("../middleware/validateItem");

const {
    getItems,
    createItem,
    getItemById,
    updateItemById,
    patchItemById,
    deleteItemById,
} = require("../controllers/inventoryController");

router.get("/", getItems);
router.post("/", validateItem, createItem);
router.get("/:id", getItemById);
router.put("/:id", validateItem, updateItemById);
router.patch("/:id", patchItemById);
router.delete("/:id",deleteItemById);

module.exports = router;