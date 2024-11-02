const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    minlength: [3, 'Product name must be at least 3 characters'],
    maxlength: [100, 'Product name must be less than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number']
  },
  isRecommended: {
    type: Boolean,
    default: false,
  },
  isBestseller: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
    required: [true, 'Status is required']
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;