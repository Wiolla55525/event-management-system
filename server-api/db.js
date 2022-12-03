const sqlite3 = require("sqlite3").verbose();

const DATASOURCE = "event-systems.sqlite";

let db = new sqlite3.Database(DATASOURCE, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to the event-systems database.");
    db.run(
      "CREATE TABLE users ( \
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            firstName TEXT NOT NULL, \
            lastName TEXT NOT NULL, \
            email TEXT NOT NULL, \
            age TEXT NOT NULL \
            )",
      (err) => {
        if (err) {
          console.log("Table already exists.");
        } else {
          const insert =
            "INSERT INTO users (firstName, lastName, email, age) VALUES (?,?,?,?)";
          db.run(insert, ["Viktoria", "Segel", "seg@gmail.com", "17"]);
          db.run(insert, ["Sandra", "Liekaite", "san@gmail.com", "37"]);
        }
      }
    );
  }
});

db.all("SELECT * from users", [], (err, rows) => {
  if (err) console.log(err);
  console.log(rows);
});

module.exports = db;
