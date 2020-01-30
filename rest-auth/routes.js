"use strict";

const express = require("express");

const { check, validationResult } = require("express-validator");

const bcryptjs = require("bcryptjs");
const auth = require("basic-auth");

const nameValidator = [
  check("name")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Please provide a value for "name"'),
  check("username")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Please provide a value for "username"'),
  check("password")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Please provide a value for "password"')
];

const users = [];

const router = express.Router();

const authenticateUser = (req, res, next) => {
  let message = null;
  const credentials = auth(req);
  if (credentials) {
    const user = users.find(u => u.username === credentials.name);

    if (user) {
      const authenticated = bcryptjs.compareSync(
        credentials.pass,
        user.password
      );

      if (authenticated) {
        console.log(`Authentication successful for username: ${user.username}`);
        req.currentUser = user;
      } else {
        message = `Authentication failure for username: ${user.username}`;
      }
    } else {
      message = `User not found for username: ${credentials.name}`;
    }
  } else {
    message = "Auth header not found";
  }
  if (message) {
    console.warn(message);
    res.status(401).json({ message: "Access Denied" });
  } else {
    next();
  }
};

router.get("/users", authenticateUser, (req, res) => {
  const user = req.currentUser;

  res.json({
    name: user.name,
    username: user.username
  });
});

router.post("/users", nameValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }

  const user = req.body;

  user.password = bcryptjs.hashSync(user.password);

  users.push(user);

  res.status(201).end();
});

module.exports = router;
