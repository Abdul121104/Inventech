const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      totalItemPrice: {
        type: Number,
        required: true,
      },
    },
  ],
  type: {
    type: String,
    enum: ['sale', 'purchase'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Automatically set transaction date
  },
  totalTransactionPrice: {
    type: Number, // Sum of all `totalItemPrice` in `items`
    required: true,
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);