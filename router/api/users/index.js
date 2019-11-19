const Router = require('@koa/router')
const Users = new Router
const Model = require('../../../model/UserInfo')

Users
  .get('/add', async ctx=> {
    let conf = ctx.query
    let { id } = conf
    const tty = await Model.find({ id })
    if (tty.length) {
      ctx.code = 404
      ctx.body = {
        msg: '重复ID'
      }
    } else {
      const kitty = new Model(conf)
      const flag = await kitty.save()
      if (flag) {
        ctx.code = 200
        ctx.body = kitty
      }
    }
  })
  .get('/fetch/:id', async ctx=> {
    const { id } = ctx.params
    let data, isAll = id === 'all'
    if (isAll) {
      data = await Model.find({})
    } else {
      data = await Model.find({ id })
    }
    if (data.length >= 1) {
      ctx.code = 200
      ctx.body = isAll ? {
        code: 200,
        lists: data
      } : data[0]
    } else if (data.length == 0) {
      ctx.code = 404
      ctx.body = {
        msg: isAll ? '数据为空' : '不存在的id'
      }
    }
  })
  .get('/update', async ctx=> {
    const conf = ctx.query
    const { id } = conf
    const tty = await Model.update({ id }, conf)
    if (tty.n) {
      ctx.code = 200
      ctx.body = {
        is: true,
        msg: '成功'
      }
    } else {
      ctx.code = 404
      ctx.body = {
        is: false,
        msg: '失败, 不存在的id'
      }
    }
  })
  .get('/clear', async ctx=> {
    // 清空表, 危险操作
    const data = await Model.remove({}) || true
    ctx.body = {
      code: 200,
      msg: '清除成功'
    }
  })
module.exports = Users