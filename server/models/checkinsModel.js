var mongoose = require('mongoose');
// checkinpassword1337
var CheckinSchema = mongoose.Schema({
  studentID: String,
  time: {
    type: Date,
    default: Date.now
  }
});

var Checkin = mongoose.model('Checkin', CheckinSchema);



module.exports = Checkin;
