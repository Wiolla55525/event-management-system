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

app.post('/users', (req, res) => {
    const data = fs.readFileSync('db.json', 'utf8');
    const jsonData = JSON.parse(data);

    const newAtendee = {
        id: jsonData.length.toString(),
        firstName: req.body.firstName,
        email: req.body.email,
        lastName: req.body.lastName,
        age: req.body.age,
    };

    jsonData.push(newAtendee);

    fs.writeFileSync('db.json', JSON.stringify(jsonData, null, 2));

    res.json(newAtendee);
})

app.delete('/users/:id', (req, res) =>{
    const id = req.params.id;
    const data = fs.readFileSync('db.json', 'utf8');
    const jsonData = JSON.parse(data);
    
    const filteredArray = jsonData.filter((item) => item.id !== id);

    fs.writeFileSync('db.json', JSON.stringify(filteredArray, null, 2), 'utf8');
    res.status(200).end();
    return true;
})

app.put('/users/:id', (req, res) =>{
    const id = req.params.id;
    const editedUser = req.body;
    const data = fs.readFileSync('db.json', 'utf8');
    const jsonData = JSON.parse(data);

    const user = jsonData.find((item) => item.id === id);

    if (editedUser.firstName) {
        user.firstName = editedUser.firstName;
      }
      if (editedUser.email) {
        user.email = editedUser.email;
      }
      if (editedUser.lastName) {
        user.lastName = editedUser.lastName;
      }
      if (editedUser.age) {
        user.age = editedUser.age;
      }
    
      fs.writeFileSync('db.json', JSON.stringify(jsonData, null, 2), 'utf8');
      res.status(200).end();
      return true;
});

app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});
