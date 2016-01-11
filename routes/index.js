var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Online Treasure Hunt' });
});


/* GET newroute page. */
var db = require('../models/db')
router.get('/game/:gameid', function(req, res) { 

  //console.log(req.params.gameid);
  var gameName = req.params.gameid;

  var collection = db.get().collection('quizzes');
  //console.log(collection);
  collection.find({Quizname: gameName}).toArray(function(err, docs) {
    //console.log(docs[0]);
    res.render('game', { quiz: docs[0] });
  })

});


module.exports = router;
