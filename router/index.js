const path = require('path')
const Koa = require('koa')
const Render = require('koa-ejs')
const App = new Koa

// 中间件
const cors = require('koa-cors')
const body = require('koa-bodyparser')
const logger = require('koa-logger')

App.use(cors())
App.use(body())
App.use(logger())

Render(App, {
  root: path.join(__dirname, '../view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
})

// 接口路由
const View = require('./view')
const Api = require('./api')
App.use(View.routes(), Api.allowedMethods())
App.use(Api.routes(), Api.allowedMethods())

module.exports = App