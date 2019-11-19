const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserInfo = new Schema({
  id: { // 唯一id
    type: String,
    required: true
  },
  edution: { // 学历
    type: String,
    required: true
  },
  name: { // 姓名
    type: String,
    required: true
  },
  date: { // 出生日期
    type: Date,
    required: true
  },
  gender: { // 性别 1 = 男 0 = 女
    type: Number,
    required: true
  },
  phone: { // 手机
    type: String,
    required: true
  },
  addr: { // 地址
    type: String,
    required: true
  },
  res1: { // 预留字段
    type: Boolean,
    required: false
  },
  res2: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('userinfo', UserInfo)