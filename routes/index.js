var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Online Treasure Hunt' });
});


/* GET newroute page. */
var db = require('../models/db')
router.get('/game', function(req, res) { 

  var collection = db.get().collection('quizzes');
  collection.find({Quizname: 'Melbourne'}).toArray(function(err, docs) {
    //console.log(docs[0]);
    res.render('game', { quiz: docs[0] });
  })

});


router.get('/test', function(req, res) { 

  var collection = db.get().collection('quizzes');
  collection.find({Quizname: 'Melbourne'}).toArray(function(err, docs) {
    console.log(docs[0]);
    // res.render('game', { title: 'Play Game' });

    res.render('test', { quiz: docs[0]});

  })

});



module.exports = router;
