const path = require('path')
const fs = require('fs')

module.exports = (app) => {
  fs
    .readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
      const router = require(path.join(__dirname, file))
      const filename = file.split('.')
      app.use('/' + filename[0], router)
    })
  app.get('/', (req, res) => {
    res.send('Hello world')
  })
  app.get('*', (req, res) => {
    res.status(404).send('Page not found')
  })
}
