var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/bigtreasurehunt');


var Schema = mongoose.Schema;

// create a schema
var quizSchema = new mongoose.Schema(
  {
    "Quizname": String,
    "QnA": [{
      "Question": String,
      "Answer": String,
      "Lat": Number,
      "Lng": Number,
      "Points": Number
    }]
  }
);

// the schema is useless so far
// we need to create a model using it
var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {
  Quiz: Quiz
}

// make this available to our users in our Node applications
module.exports = Quiz;


// create a new quiz called quiz2
var quiz2 = new Quiz(
  {
    "Quizname": "Melbourne",
    "QnA": [
      {
        "Question": "Name this Melbourne's oldest hotel and pub on the corner of Flinders and Russell Streets built in 1850.",
        "Answer": "the DUKE hotel",
        "Lat": "-37.816388",
        "Lng": "144.969999",
        "Points": "20"
      },
      {
        "Question": "This Beyonce-inspired 68-storey skyscraper will be built in Melbourne city at this address",
        "Answer": "134 SPENCER street",
        "Lat": "-37.817278",
        "Lng": "144.953863",
        "Points": "20"
      },
      {
        "Question": "This coastal township in Melbourne harvests about 60 per cent of Australia's mussels.",
        "Answer": "PORTARLINGTON",
        "Lat": "-38.114600",
        "Lng": "144.653049",
        "Points": "10"
      },
      {
        "Question": "This bluestone-cobbled lane in the city has graffiti covered walls with sophisticated urban art.",
        "Answer": "HOSIER lane",
        "Lat": "-37.816431",
        "Lng": "144.969123",
        "Points": "10"
      },
      {
        "Question": "Off Flinders Lane, a block and a half from Swanston Street, the video clip to 'Long Way to the Top' was filmed. Name this lane.",
        "Answer": "ACDC lane",
        "Lat": "-37.815540",
        "Lng": "144.970895",
        "Points": "10"
      },
      {
        "Question": "The Melburnian idiom 'I'll meet you under the clocks' refers to the row of clocks at the entrance of what ...?",
        "Answer": "FLINDERS street station",
        "Lat": "-37.817780",
        "Lng": "144.966944",
        "Points": "10"
      },
      {
        "Question": "This historic world's oldest amusement park under management is more than 100 years old is located at...",
        "Answer": "st KILDA",
        "Lat": "-37.867713",
        "Lng": "144.976899",
        "Points": "5"
      },
      {
        "Question": "Australian-born Singer Kylie Minogue was raised in this Melbourne suburb",
        "Answer": "SURREY hills",
        "Lat": "-37.826173",
        "Lng": "145.099895",
        "Points": "5"
      },
      {
        "Question": "Vegemite was not only invented in Melbourne but every jar of Vegemite 'ever made' has come from the Melbourne factory at _ _ _ _ _ _ _ _ _'s bend ?",
        "Answer": "FISHERMAN's bend",
        "Lat": "-37.826553",
        "Lng": "144.911617",
        "Points": "5"
      },
      {
        "Question": "This vegetables, fruits, food and non-food destination in the city was once a cemetry and has roughly 9,000 people buried under its sheds and car park.",
        "Answer": "queen VICTORIA market",
        "Lat": "-37.807614",
        "Lng": "144.956806",
        "Points": "5"
      }
    ]

  }
);


// call the built-in save method to save to the database
quiz2.save(function(err) {
  if (err) throw err;
  console.log('quiz2 saved successfully!');
});












