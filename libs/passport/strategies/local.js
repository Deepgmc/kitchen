const LocalStrategy = require('passport-local')
const User = require('../../../server/schemas/User')

module.exports = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async function(email, password, done) {
        console.log(password);
        console.log("ASYNC!!!!!!!!!!!");
        try {
            const user = await User.findOne({email: email})
            console.log('Local strategy runs!!!!!!!!!!', user);
            if(!user){
                return done(null, false)
            }

            return done(null, user)

        } catch(err){
            console.log('PASSPORT LOCAL CATCH', err)
            done(err)
        }
    }
)