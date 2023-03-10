/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PROD_DB_USERNAME: 'sa',
    PROD_DB_PASSWORD: 'Transformacion22#',
    PROD_DB_DATABASE: 'changarrito',
    PROD_DB_HOST:     '172.30.2.128',
    PROD_DB_DIALECT:  'mssql',
    NEXTAUTH_URL: 'http://localhost:3000',
    AUTH_JWT_ENCRYPTION_KEY: '0caa6723e727b8d7a0b68542044606c828e80fd7791f5d6070a9aab94af3c58b',
    AUTH_JWT_SECRET: '',
    AUTH_JWT_SIGNING_KEY: ''
  },
}

module.exports = nextConfig
