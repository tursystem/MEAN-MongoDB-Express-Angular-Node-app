"use strict";
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name            : String,
    email           : String,
    subscription   : Boolean,
    email_checked   : Boolean
});