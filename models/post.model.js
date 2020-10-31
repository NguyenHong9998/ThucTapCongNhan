var mongoose = require('mongoose');
var post = new mongoose.Schema({
  name: String,
  content: String,
  status: Boolean,
  time_post: String,
  id_school: String,
  comments: [ 
      {
          name: String,
          content_comment: String,
          time: String
      }
  ]
  }, { 
      versionKey: false 
  });
module.exports = mongoose.model('post',post,'post');