const server_port = 8888

const Koa = require('koa'),
    app = new Koa()

require('../handlers/favicon').init(app)
require('../handlers/templates').init(app)
require('../handlers/static').init(app)
require('../handlers/session').init(app)
require('../handlers/bodyparser').init(app)
require('../handlers/passport').init(app)
const router = require('koa-router')()

//INDEX
router.get('/', require('../server/routes/indexPage').get)


//LOGIN
router.post('/login', require('../server/routes/login').post)
router.get('/login', require('../server/routes/login').get)


//API
router.get('/api/get-user-data', async (ctx) => {
    if(ctx.isAuthenticated()){
        ctx.body = {
            '_id'  : ctx.state.user._id,
            'email': ctx.state.user.email,
            'name' : ctx.state.user.name,
        }
    }
})


//LOGOUT
router.get('/logout', async (ctx) => {
    ctx.logout()
    ctx.redirect('/')
})

app.use(router.routes())



app.listen(server_port, () => {
    console.log('Server started at ' + server_port)
})