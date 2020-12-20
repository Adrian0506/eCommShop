const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/signup', (req, res) => {
    var con = mysql.createConnection({
        host: "z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "rmsqwk52komea1fc",
        password: "xaysyruj9eafvwia",
        database: 'pae09uk71znet4ib'
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      let newQuery =  `INSERT INTO users (username, password, admin) VALUES ("${req.body.username}", "${req.body.password}", "false")`


      con.query(newQuery,(err, result) =>{
          if (err) {
              console.log(err)
          } else {
              console.log(result)
              res.send('Account created');
            }
      })

 
})
app.post('/', async (req, res) => {
    var con = mysql.createConnection({
        host: "z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "rmsqwk52komea1fc",
        password: "xaysyruj9eafvwia",
        database: 'pae09uk71znet4ib'
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      let newQuery = 'SELECT * FROM users;'


      con.query(newQuery,(err, result) =>{
          if (err) {
              console.log(err)
          } else {
              console.log(result)
              res.end();
            }
      })

 

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})