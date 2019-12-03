const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const {PORT, connection} = require("./config")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send({message: "Welcome to my api with mysql sqeuelize"})
})

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
    console.log(`On port ${PORT}`);
    
})