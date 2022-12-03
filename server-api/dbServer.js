require("dotenv").config();
const express =require('express');
const cors = require('cors');
const PORT= process.env.PORT;
const app = express();
const fs = require('fs');
const db = require('./db.js');

app.use(express.json());
app.use(cors());

app.get("/users", (req, res, next) => {
    const sql = "select * from users"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });

  

  app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});
