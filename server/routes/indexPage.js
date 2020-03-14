exports.get = async (ctx, res) => {
    if(ctx.isAuthenticated()){
        ctx.body = ctx.render('kitchen.pug', {
            pageName: 'Кухня ПКР'
        })
    } else {
        console.log('NOT LOGINED INDEX')
        ctx.redirect('/login')
    }
}