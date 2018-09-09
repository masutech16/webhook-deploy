const http = require('http')
const {spawn, execSync} = require('child_process')

const createHandler = require('github-webhook-handler')
const handler = createHandler({path: '/', secret: "secret"})

const server = http.createServer((req, res) => {
  handler(req, res, err => {
    res.end('Not found')
  })
}).listen(7777)

handler.on('push', event => {
  const payload = event.payload
  const branch = payload.ref.split("/").pop()

  if (branch === 'master') {
    console.log("Deploying...")
    execSync('sh deploy.sh', {shell: '/bin/bash'})
  }
})