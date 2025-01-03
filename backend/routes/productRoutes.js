const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import the Product model

// Route to add a new product
router.post('/add', async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        console.log(req.body);
        // Check for missing fields
        if (!name || quantity === undefined || price === undefined) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const newProduct = new Product({ name, quantity, price });
        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully!', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
});


// Route to delete a product by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found!' });
        }

        res.status(200).json({ message: 'Product deleted successfully!', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
});

// Route to update a product by ID
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, quantity, price },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found!' });
        }

        res.status(200).json({ message: 'Product updated successfully!', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
});

// Route to get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});

module.exports = router;
