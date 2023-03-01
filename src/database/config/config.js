module.exports = {
  development: {
    username: PROD_DB_USERNAME,
    password: PROD_DB_PASSWORD,
    database: PROD_DB_DATABASE,
    host: PROD_DB_HOST,
    dialect: PROD_DB_DIALECT
  },
  test: {
    username: 'root',
    password: 'null',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: 'null',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
