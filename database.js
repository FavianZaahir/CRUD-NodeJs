const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "sql.freedb.tech",
  database: "freedb_favian_db",
  user: "freedb_crud_database",
  password: "9RS$@3VQ%Tp2$C7",
  connectTimeout: 20000, 
});

module.exports = db
