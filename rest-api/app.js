'use strict';

var express = require("express");
var app = express();

var { router, login } = require('./routes');

var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/qa");

var db = mongoose.connection;

db.on("error", function(err) {
    console.error("connection error:", err);
});

db.once("open", async function() {
    console.log("db connection successful");
});

app.use((req, res, next) => {
    console.log('\n\n\n\n');
    next();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
        return res.status(200).json({});
    }
    next();
});

app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the REST API with Express and MongoDB project!',
    });
  });

app.use("/questions", router);
app.use("/Login", login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//Error Handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Express server is listening on port: ", port);
});