import { handleAuthorization } from './authz';
import { handleAuthentication } from './auth';
import * as jsonServer from 'json-server'
import {Express} from 'express'
import * as fs from 'fs'
import * as https from 'https'



const server : Express = jsonServer.create()

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)
server.use('/restaurants', handleAuthorization)


// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key : fs.readFileSync('./backend/keys/key.pem'),
}


https.createServer(options, server).listen(3001, () =>{
console.log('Json server is running on https://localhost:3001')
})

// server.listen(3000, () => {
//   console.log('JSON Server is running')
// })