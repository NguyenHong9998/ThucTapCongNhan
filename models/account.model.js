var mongoose = require('mongoose');
var account = mongoose.model(
  'account',
  new mongoose.Schema({
    name: String,
    pass: String,
    check_admin: Boolean
  }, { 
      versionKey: false 
  }),
  'account'
);
module.exports = account;