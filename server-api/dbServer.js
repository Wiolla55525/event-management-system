require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
const fs = require("fs");
const db = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/users", (req, res, next) => {
  const sql = "select * from users";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post("/users", (req, res, next) => {
  const requestBody = req.body;
  db.run(
    `INSERT INTO users (firstName, lastNAme, email, age) VALUES (?,?,?,?)`,
    [
      requestBody.firstName,
      requestBody.lastName,
      requestBody.email,
      requestBody.age,
    ],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ message: "success" });
    }
  );
});

app.patch("/users/", (req, res, next) => {
  db.run(
    `UPDATE users set firstName = "` +
      req.body.firstName +
      `", lastName = "` +
      req.body.lastName +
      `", email = "` +
      req.body.email +
      `", age = "` +
      req.body.age +
      `"  WHERE id = "` +
      req.body.id +
      `"`,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        console.log(err);
        return;
      }
      console.log(result);
      res.status(200).json({ updatedID: this.changes });
      // res.json(result)
    }
  );
});

app.delete("/users/:id", (req, res, next) => {
  db.run(
    `DELETE FROM users WHERE id = ?`,
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.status(200).json({ message: "success" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`server is listening  on ${PORT}`);
});
