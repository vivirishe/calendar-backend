var mongoose = require('mongoose');

//references users and groups models
var occasionSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  location: String,
  category: String,
  eventDate: Date,
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}]
});

var Occasion = mongoose.model('Occasion', occasionSchema);

module.exports = Occasion;
