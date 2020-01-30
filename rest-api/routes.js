'use strict';

var express = require('express');
var router = express.Router();
var Question = require("./models").Question;

router.param("qID", (req, res, next, id) => {
    Question.findById(id, (err, doc) => {
        if(err) return next(err);
        if(!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.question = doc;
        return next();
    });
});

router.param("aID", (req, res, next, id) => {
    req.answer = req.question.answers.id(id);
    if(!req.answer) {
        err = new Error("Not Found");
        err.status = 404;
        return next(err);
    }
    next();
})

//GET /questions
router.get("/", function (req, res, next) {
    Question.find({})
            .sort({ createdAt: -1 })
            .exec((err, questions) => {
                if (err) return next(err);
                res.json(questions);
            });
});

//POST /questions
router.post("/", function (req, res, next) {
    var question = new Question(req.body);
    question.save((err, question) => {
        if(err) return next(err);
        res.status(201);
        res.json(question);
    });
});

//GET /questions/:qID
router.get("/:qID", function (req, res, next) {
    res.json(req.question);
});

//POST /questions/:qID/answers
router.post("/:qID/answers", function (req, res, next) {
    req.question.answers.push(req.body);
    req.question.save((err, question) => {
        if(err) return next(err);
        res.status(201);
        res.json(question);
    });
});

//PUT /questions/:qID/answers/:aID
router.put("/:qID/answers/:aID", function (req, res, next) {
    req.answer.update(req.body, (err, result) => {
        if(err) return next(err);
        res.json(result);
    });
});

//DELETE /questions/:qID/answers/:aID
router.delete("/:qID/answers/:aID", function (req, res) {
    req.answer.remove((err) => {
        req.question.save((err, question) => {
            if(err) return next(err);
            res.json(question);
        });
    });
});

//POST /questions/:qID/answers/:aID
router.post("/:qID/answers/:aID/vote-:dir", function (req, res, next) {
    if (req.params.dir.search(/^(up|down)$/) === -1) {
        var err = new Error("Not Found");
        err.status = 404;
        next(err);
    } else {
        req.vote = req.params.dir;
        next();
    }
},
(req, res, next) => {
    req.answer.vote(req.vote, (err, question) => {
        if(err) return next(err);
        res.json(question);
    });
});

module.exports = router;