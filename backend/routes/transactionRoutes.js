const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const Product = require('../models/Product');

// Route to add a new transaction
router.post('/add', async (req, res) => {
    try {
        const { items, type } = req.body;

        // Validate required fields
        if (!items || !type || items.length === 0) {
            return res.status(400).json({ message: 'Items and type are required!' });
        }

        // Initialize total transaction price
        let totalTransactionPrice = 0;

        // Validate items and calculate total price
        for (let item of items) {
            const product = await Product.findById(item.productId);
            if (!product) {
                return res.status(404).json({ message: `Product with ID ${item.productId} not found.` });
            }

            // Check if sufficient stock is available for 'sale' transactions
            if (type === 'sale' && product.quantity < item.quantity) {
                return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
            }

            // Update product quantity based on transaction type
            const updatedQuantity =
                type === 'sale'
                    ? product.quantity - item.quantity // Reduce stock for sales
                    : product.quantity + item.quantity; // Increase stock for purchases
            product.quantity = updatedQuantity;
            await product.save();

            // Calculate the total price for the current item
            const totalItemPrice = item.quantity * product.price;
            totalTransactionPrice += totalItemPrice;

            // Update item details
            item.productName = product.name;
            item.price = product.price;
            item.totalItemPrice = totalItemPrice;
        }

        // Create a new transaction
        const transaction = new Transaction({
            items,
            type,
            totalTransactionPrice,
        });

        // Save the transaction
        await transaction.save();

        res.status(201).json({
            message: 'Transaction added successfully!',
            transaction,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error adding transaction',
            error: error.message,
        });
    }
});

// Route to get all transactions
router.get('/', async (req, res) => {
    try {
        // Retrieve all transactions and populate product details
        const transactions = await Transaction.find().sort({ date: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving transactions',
            error: error.message,
        });
    }
});

module.exports = router;
