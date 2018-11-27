const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))
const port = process.env.PORT || 8000

require('./routers')(app)
sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`Server has stared on port ${port}`))
  })
  .catch(err => {
    console.log(`Server start failed, unable to connect to database ${err}`)
  })
