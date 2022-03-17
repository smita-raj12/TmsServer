
const mysql = require("mysql");

// const db= mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"Ragu@2905",
//     database: "timeentrydatabase"
//   });

const db= mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user:"be737331350a0d",
  password:"454fc2ea",
  database: "heroku_22ab797459c1fe1"
});

// const db= mysql.createConnection({
//     host: "database-1.cfdorcrhxxic.us-west-2.rds.amazonaws.com",
//     user:"admin",
//     password:"aarav2014",
//     database: "database-1"
//   });

module.exports = db;


// mysql://be737331350a0d:454fc2ea@us-cdbr-east-05.cleardb.net/heroku_22ab797459c1fe1?reconnect=true