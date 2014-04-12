"use strict";
var mongoose = require('mongoose');

module.exports = mongoose.model('Im', {
	text : String,
	done : Boolean
});