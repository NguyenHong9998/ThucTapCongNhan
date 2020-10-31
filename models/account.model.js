var mongoose = require('mongoose');
var account = new mongoose.Schema({
    name: String,
    pass: String,
    check_admin: Boolean
  }, { 
      versionKey: false 
  });
module.exports = mongoose.model('account',account,'account');