const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose); 
const Currency = mongoose.Types.Currency;

var universitySchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,  
      },
      
      Program: {
        type: String,
        required: true,
      },
      description:String, 
      price: {
        type: Currency,
        required: true,
        min: 0
    },
 });
 module.exports = mongoose.model('university', universitySchema);