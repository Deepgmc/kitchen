const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/kitchen')

module.exports = mongoose