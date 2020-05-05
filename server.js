
var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

app.get('/', function (req, res) {
  //res.send('Hello World!')
  //res.render("form.ejs",{});
  res.redirect("DungeonGenius.html");
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
});
