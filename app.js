const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))
const port = process.env.PORT || 8000

require('./routers')(app)

app.listen(port, () => console.log(`Server has stared on port ${port}`))
