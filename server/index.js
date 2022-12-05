const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "rootroot",
  database: "crud_contact",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/GET", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  //   const sqlInsert =
  //     "INSERT INTO contact_db (name, email, contact) VALUES ('tree', 'johnDoe@gmail.com', 98989898)";
  //   db.query(sqlInsert, (err, result) => {
  //     console.log("err", err);
  //     console.log("result", result);
  //     res.send("hi express");
  //   });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
