const sqlite3 = require("sqlite3").verbose();

const DB = "loginDb.sqlite";

let loginDb = new sqlite3.Database(DB, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to the login database.");
    loginDb.run(
      "CREATE TABLE login ( \
              email TEXT NOT NULL, \
              password TEXT NOT NULL \
              )",
      (err) => {
        if (err) {
          console.log("Table already exists.");
        } else {
          const insert = "INSERT INTO login (email, password) VALUES (?,?)";
          loginDb.run(insert, ["admin@admin.com", "admin"]);
        }
      }
    );
  }
});

loginDb.all("SELECT * from login", [], (err, rows) => {
  if (err) console.log(err);
  console.log(rows);
});

module.exports = loginDb;
