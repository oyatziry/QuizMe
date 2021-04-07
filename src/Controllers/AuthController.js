const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

router.post('/signup', (req,res) => {
  db.User.create(req.body, (err, savedUser) => {
    if (err) console.log('Error in creating user:', err);

    res.json({ user: savedUser })
  })
}) 

// const create = (req,res) => {
//   db.User.create(req.body, (err, savedUser) => {
//     if (err) console.log('Error in creating user:', err);

//     res.json({ user: savedUser })
//   })
// }