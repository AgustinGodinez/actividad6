'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const process = require('process')

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]
const db = {}

// importar modelos
const product = require('./product')
const user = require('./user')
const category_product = require('./category_product')
const roles = require('./roles')

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}
/*
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const model = require(path.join(models, file))(sequelize, Sequelize.DataTypes)
    console.log("model: "+ model)
    db[model.name] = model
  })
*/
db.Product = product(sequelize, Sequelize.DataTypes)
db.User = user(sequelize, Sequelize.DataTypes)
db.Category_Product = category_product(sequelize, Sequelize.DataTypes)
db.Roles = roles(sequelize, Sequelize.DataTypes)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
