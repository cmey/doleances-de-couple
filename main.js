var express = require('express');
var path = require('path');
var http = require('http');

// // DB STUFF
// var mongoose = require("mongoose");

// // Here we find an appropriate database to connect to, defaulting to
// // localhost if we don't find one.
// var uristring =
// process.env.MONGOLAB_URI ||
// process.env.MONGOHQ_URL ||
// 'mongodb://localhost/HelloMongoose';

// // Makes connection asynchronously.  Mongoose will queue up database
// // operations and release them when the connection is complete.
// mongoose.connect(uristring, function (err, res) {
//   if (err) {
//   console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   } else {
//   console.log ('Succeeded connected to: ' + uristring);
//   }
// });

// var userSchema = new mongoose.Schema({
//   name: {
//     first: String,
//     last: { type: String, trim: true }
//   },
//   age: { type: Number, min: 0 }
// });

// var PUser = mongoose.model('PowerUsers', userSchema);

// // Creating one user.
// var johndoe = new PUser ({
//   name: { first: 'John', last: '  Doe   ' },
//   age: 25
// });

// // Saving it to the database.
// johndoe.save(function (err) {if (err) console.log ('Error on save!')});

// PUser.find({}).exec(function(err, result) {
//   if (!err) {
//     // handle result
//   } else {
//     // error handling
//   };
// });


// WEB
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'client', 'views'))
app.set('view engine', 'jade')
app.use('/js', express.static(__dirname + '/client/js'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
//response.send('Hello World!');
  response.sendFile(__dirname + '/client/views/untitled.html')
  //response.render('index', {title: 'Blitzmeet!'})
});

var serve = http.createServer(app);
var io = require('socket.io')(serve);

serve.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

io.on('connection', function (socket) {
	console.log('a user connected');
	//mongo.connect(process.env.)
});

io.on('disconnection', function (socket) {
	console.log('a user disconnected');
});