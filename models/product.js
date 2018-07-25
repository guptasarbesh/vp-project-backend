const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//ProductSchema
const ProductSchema = mongoose.Schema ({
    name: {
      type: String
    },
    image: {
        type: String,
        required: true
      },
    image1: {
      type: String,
      required: true
    },
    image2: {
        type: String,
        required: true
      },image3: {
        type: String,
        required: true
      },
    id: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  });
  
  const Product = module.exports = mongoose.model('Product', ProductSchema);
  
