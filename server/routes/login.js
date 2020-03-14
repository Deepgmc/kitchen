const passport = require('../../libs/passport')

exports.post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
})

exports.get = (ctx) => {
    console.log('LOGIN GET');
    if(ctx.isAuthenticated()){
        console.log('LOGINED');
        console.log(ctx.state.user);
        console.log(ctx.state.user.email);
        console.log(ctx.state.user.name);
        ctx.redirect('/')
    } else {
        console.log('RENDER LOGIN');
        ctx.body = ctx.render('login.pug', {
            pageName: 'Вход'
        })
    }
}