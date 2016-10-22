'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('pages/interface.hbs', { title: 'Collaborooms', siteName: 'Collaborooms' });
});

router.get('/login', (req, res, next) => {
  res.render('signin', { title: 'Login' });
});

module.exports = router;