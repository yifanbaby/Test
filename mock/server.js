const jsonServer = require('json-server')
const server = jsonServer.create()

const middleware = jsonServer.defaults()
server.use(middleware)

const extend = require('extend')
const path = require('path')
const fs = require('fs')
const mockDir = path.join(__dirname, 'data')
const base = {}
const files = fs.readdirSync(mockDir)
files.forEach(file => {
  extend(true, base, require(path.resolve(mockDir, file)))
})
const router = jsonServer.router(base)
server.use(router)

router.render = (req, res) => {
  console.log(res)
  res.jsonp({
    data: res.locals.data,
    status: 0,
    msg: 'ok'
  })
}

server.listen(9000, () => {
  console.log('server is started')
})
