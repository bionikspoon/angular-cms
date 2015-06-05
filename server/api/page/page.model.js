'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PageSchema = new Schema({
  title: String,
  url: {
    type: String,
    index: {unique: true}
  },
  content: String,
  menuIndex: Number,
  date: Date
});

module.exports = mongoose.model('Page', PageSchema);
