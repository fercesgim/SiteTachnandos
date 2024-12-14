const express = require("express");
const app = express();
const router = require("./routes/main");
const bodyParser = require("body-parser");
const sequelize = require("./config/sqlConnection.js")
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync().then(() => console.log('banco rodando'));

app.use(router);
app.set("Viewengine", "ejs");
app.use("", require("./routes/main"));
app.use(express.static("public"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

module.exports = bodyParser;

const port = 3030;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
