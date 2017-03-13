// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
require('dotenv').config();

var mongoose = require('./database');
var User = require('../models/User');
var Occasion = require('../models/Occasion');
var Group = require('../models/Group');


var users = [
  {
    name: "Viviana",
    email: "vivi@vivi.com",
  },
  {
    name: "Joel",
    email: "joel@joel.com",
  }
];

User.remove({}, function(err) {
  if(err) console.log(err);
  User.create(users, function(err, savedUsers) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + savedUsers.length + " users.");
      mongoose.connection.close();
    }
    process.exit();
  });
});

// var occasion = [
//   {
//     title: "Dr appt",
//     description: "Allergy dr first visit",
//     location: "Woodland hills",
//     category: "Family",
//   }
// ]
