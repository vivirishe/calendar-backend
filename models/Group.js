var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
  name: {type: String, required: true},
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  occasions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Occasion'}]
});

var Group = mongoose.model('Group', groupSchema);

module.exports = Group;
