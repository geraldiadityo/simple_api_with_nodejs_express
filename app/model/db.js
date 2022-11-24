const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB,
    port:dbConfig.PORT,
});

connection.connect(error => {
    if (error) console.log(error);
    console.log("Successfully connected to database");
});

module.exports = connection;
