const dotENV = new (require('tiny-env'))
const { data: config } = dotENV
let users = `${ config.MONGO_USER }:${ config.MONGO_PWD }`
const DB = 
`mongodb://${ users }`
+
`@${ config.MONGO_IP }:${ config.MONGO_PORT }`
+ `/${ config.MONGO_DB || '' }`

module.exports = {
  DB
}