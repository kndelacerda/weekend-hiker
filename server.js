// // =================================================================
// // Dependencies
// // =================================================================
// var express = require('express');
// var path = require('path');
// var methodOverride = require('method-override');

// // =================================================================
// // Initialize new Express app
// // =================================================================
// var app = express();

// // =================================================================
// // View engine setup
// // =================================================================
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // =================================================================
// // Configure page favicon and public web folder
// // =================================================================
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, '/assets/favicon/', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));


// // =================================================================
// // Configure body-parser middleware
// // =================================================================
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // =================================================================
// // Setup console logger
// // =================================================================
// var logger = require('morgan');
// app.use(logger('dev'));

// // =================================================================
// // Configure application routes
// // =================================================================
// // app.use(methodOverride('_method'));

// // var controller = require('./controllers/initialcontroller');
// // app.use('/', controller);

// // // Catch 404 errors, forward to error handlers below.
// // app.use(function(req, res, next) {
// //     var err = new Error('Not Found');
// //     err.status = 404;
// //     next(err);
// // });

// // =================================================================
// // Error handler - development error handler will print stacktrace
// // =================================================================
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // =================================================================
// // Error handler - production handler not leaking stacktrace to user
// // =================================================================
// app.use(function(err, req, res) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });



// module.exports = app;

// RANDOM -- TRYING OUT STUFF
// RANDOM -- TRYING OUT STUFF
// RANDOM -- TRYING OUT STUFF
// RANDOM -- TRYING OUT STUFF
// RANDOM -- TRYING OUT STUFF
// RANDOM -- TRYING OUT STUFF


// Dependencies
var express = require("express");
// var exphbs = require("express-handlebars");
// var prompt = require("prompt");
// var inquirer = require("inquirer");
var bodyParser = require("body-parser");
var path = require("path");

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = 4000;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER 
// require("./app/routing/apiRoutes")(app);
require("./routing/htmlRoutes.js")(app);
// ================================================================================

// Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var newFriends = [
//     { name: "Kristen", hobby: "musician", interestedIn: "Sky diving" },
// ];

// Routes
// app.get("/icecreams/:name", function(req, res) {
//     res.render("/views/layouts/index.handlebars", icecreams[0]);
// });

// app.get(function(req, res) {
//     res.sendFile(path.join(__dirname, "/../public/index.html"));
// });

// app.get("/weekend", function(req, res) {
//     res.render("index", lunches[1]);
// });

// app.get("/icecreams/:name", function(req, res) {
//     res.render("all-icecreams", {
//         Icecream_List: icecreams,
//     });
// });

app.listen(process.env.PORT, function() {
    console.log('App listening on PORT ' + PORT);
});