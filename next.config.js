/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PROD_DB_USERNAME: 'sa',
    PROD_DB_PASSWORD: 'Transformacion22#',
    PROD_DB_DATABASE: 'changarrito',
    PROD_DB_HOST:     '172.30.2.128',
    PROD_DB_DIALECT:  'mssql'
  },
}

module.exports = nextConfig
