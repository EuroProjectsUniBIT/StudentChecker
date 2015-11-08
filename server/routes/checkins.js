var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Checkin = require('../models/checkinsModel');

router.post('/add', function(req, res, next) {
  if (req.body.studentID.length > 3) {
    var TestCheckin = new Checkin({
      studentID: req.body.studentID
    });

    TestCheckin.save(function(err,done){
      if (err) {
        return console.error(err);
      }
      console.log('checkin saved');
    });

    return res.send('You have been checked !');
  }

});

router.get('/all', function(req, res, next) {
  Checkin.find(function(err, checkin) {
    res.json(checkin);
  });

});
module.exports = router;
