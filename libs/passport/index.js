const passport = require('koa-passport')
const User = require('../../server/schemas/User')

const localStrategy = require('./strategies/local')

passport.serializeUser(function(user, done) {
    console.log('SERIALIZE');
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    console.log('FIND ONE');
    User.findById(id, done)
})

passport.use(localStrategy)

module.exports = passport