'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('config');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
