const mongodb = require('mongoose')
const { dotENV: config } = require('./config')
require('colors')
console.log(`${ 'debug'.green }: ${ config.DB }`.blue)
const db = mongodb.connect(config.DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(r=> {
  console.log(`${ 'debug'.green }: MongoDB connected success❤️`.blue)
}).catch(r=> {
  throw new Error(`${ 'debug'.red }: MongoDB connected fail😂`.red, r)
})