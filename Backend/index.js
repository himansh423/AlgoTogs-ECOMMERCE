require('dotenv').config();
const express = require('express')
const server = express()


server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(process.env.PORT, () => {
  console.log("server started");
})