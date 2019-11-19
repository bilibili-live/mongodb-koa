const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResInfo = new Schema({
  openid: { // 微信 `openid`
    type: String,
    required: true
  },
  edu: { // 课程
    type: String,
    required: true
  },
  date: { // 日期
    type: Date,
    required: true
  },
  name: { // 姓名
    type: String,
    required: true
  },
  phone: { // 手机号
    type: Number,
    required: true
  },
  note: { // 备注
    type: String,
    required: false
  },
  isRead: { // 已读
    type: Boolean,
    required: false
  },
  res2: { // 预留字段
    type: Boolean,
    required: false
  },
  res3: { // 预留字段
    type: String,
    required: false
  }
})

module.exports = mongoose.model('ResInfo', ResInfo)