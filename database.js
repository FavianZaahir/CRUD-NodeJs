const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "sql.freedb.tech",
  database: "freedb_favian_db",
  user: "freedb_crud_database",
  password: "4e!fqS&Qch#EH$d",
  connectTimeout: 20000, 
});

module.exports = db