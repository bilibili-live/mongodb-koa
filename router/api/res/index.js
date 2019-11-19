const Router = require('@koa/router')
const Res = new Router
const Model = require('../../../model/ResInfo')

/* 不考虑分页 */

Res
  .get('/fetch/:id', async ctx=> {
    const { id: openid } = ctx.params
    let lists = await Model.find({ openid })
    ctx.code = 200
    ctx.body = {
      code: 200,
      lists
    }
  })
  .get('/create/:id', async ctx=> {
    const { id } = ctx.params
    const conf = ctx.query
    conf.openid = id
    const temp = new Model(conf)
    const data = await temp.save()
    ctx.code = 200
    ctx.body = data
  })
module.exports = Res