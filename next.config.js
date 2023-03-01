/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    username: 'sa',
    password: 'Transformacion22#',
    database: 'changarrito',
    host:     '172.30.2.128',
    dialect:  'mssql'
  },
}

module.exports = nextConfig
