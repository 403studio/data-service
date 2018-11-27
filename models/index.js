const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')
require('dotenv').config()
const db = []

const storage = path.resolve(__dirname, '..', 'dataServer.sqlite')
const sequelize = new Sequelize(
  process.env.DB_DATABASE || 'dataServer',
  process.env.DB_USERNAME || 'dataServer',
  process.env.DB_PASSWORD || 'dataServer',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'sqlite',
    storage: process.env.DB_STORAGE || storage,
    define: {
      underscored: true,
      paranoid: true
    }
  }
)

fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize
module.exports = db
