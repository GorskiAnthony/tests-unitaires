// connection.js
const mysql = require("mysql");

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  database: DB_NAME,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
