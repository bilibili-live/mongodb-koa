const Router = require('@koa/router')
const Users = require('./users')
const Res = require('./res')
const App = new Router({ prefix: '/api' })

App.get('/', async ctx=> {
  ctx.body = '/api'
})
App.use('/users', Users.routes(), Users.allowedMethods())
App.use('/res', Res.routes(), Res.allowedMethods())

module.exports = App