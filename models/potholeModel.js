const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Pothole = new Schema({
  location: Number,
  severity: String,
  isFixed: Boolean
});
 
module.exports = mongoose.model('Pothole', Pothole);