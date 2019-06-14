var express = require('express')
var serveStatic = require('serve-static')
var helmet = require('helmet')
var app = express()

app.disable('x-powered-by')

app.use(
  helmet({
    frameguard: {
      action: 'SAMEORIGIN'
    }
  })
)

app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true
  })
)

app.use(require('connect-history-api-fallback')())

app.use(serveStatic('./dist'))

var port = 80
app.listen(port)

console.log('server started ' + port)
