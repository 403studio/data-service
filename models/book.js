module.exports = (sequelize, DataTypes) => {
  return sequelize.define('book', {
    author: DataTypes.STRING
  })
}
