var mongoose = require('mongoose');
var school = new mongoose.Schema({
  id_school: String,
  name: String,
  address: String,
  num_of_rating: Number,
  rating: Number
  }, { 
      versionKey: false 
  });
module.exports = mongoose.model('school',school,'school');