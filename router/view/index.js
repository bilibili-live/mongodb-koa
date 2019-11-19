const Router = require('@koa/router')
const Model = {
  user: require('../../model/UserInfo'),
  res: require('../../model/ResInfo')
}
const _ = require('lodash.sortby')
const View = new Router({ prefix: '/view' })

View
  .get('/user/:id', async ctx=> {
    const { id } = ctx.params
    let data = await Model['user'].find({ id })
    if (data.length == 1) {
      data = data[0]
    } else data = false
    await ctx.render('user', {
     data
    })
  })
  .get('/res/:id', async ctx=> {
    const { id: openid } = ctx.params
    const data = await Model['res'].find({ openid })
    let sortBy = []
    if (data.length >= 2) {
      sortBy = _(data, item=> {
        let time = new Date(item.date)
        time = time.valueOf()
        return time
      })
      sortBy.reverse()
    } else {
      sortBy = data
    }
    await ctx.render('res', {
      data: sortBy
    })
  })
  .get('/find', async ctx=> {
    await ctx.render('find')
  })

module.exports = View