const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('book list')
})

module.exports = router
