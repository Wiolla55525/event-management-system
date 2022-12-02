require("dotenv").config();
const express =require('express');
const cors = require('cors');
const PORT= process.env.PORT;
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
    const data = fs.readFileSync('./db.json', 'utf8');
    const json = JSON.parse(data);
    res.json(json);
}
)

app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});
