const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // Import productRoutes
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/transactions', transactionRoutes);

// MongoDB Connection
mongoose.connect('mongodb://0.0.0.0:27017/inventoryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected!'))
    .catch((error) => console.error('MongoDB connection error:', error));


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));