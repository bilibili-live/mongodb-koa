const http = require('http')
const clear = require('clear')
const App = require('./router')

require('./mongo')

let port = 2333
const Server = http.createServer(App.callback())
clear()
Server.listen(port)