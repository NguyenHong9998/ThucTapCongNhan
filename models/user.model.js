var mongoose = require('mongoose');
var user = new mongoose.Schema({
    avatar: String,
    name: String,
    mail: String,
    phone: String,
    job: String,
    office: String,
    isChecked: Boolean,
    name_acc: String
  }, { 
      versionKey: false 
  });
module.exports = mongoose.model('user',user,'user');