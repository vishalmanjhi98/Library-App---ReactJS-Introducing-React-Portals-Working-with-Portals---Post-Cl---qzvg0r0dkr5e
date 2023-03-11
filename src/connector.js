
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "hitesh",
    password: "password@12345",
    database: "mydb",
    multipleStatements: true
});


con.connect(function (err) {
    if (err) return console.log("failed to connect to mysql server/ database", err);
    else return console.log("connection establish with Datebase!!!!");
});

module.exports = con;