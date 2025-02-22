require('dotenv').config();
const postgres = require('postgres')

const sql = postgres({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

module.exports =  sql;