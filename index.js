const express = require("express");
const config = require("config");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db");

console.log("AWS server working")

const PORT = 3001
const server= app.listen(process.env.PORT || PORT,() => {
    console.log(`running on port ${PORT}`);
});


module.exports = server;