require('dotenv').config();
const express = require('express')
const server = express();

const productHomeRouter = require('./routes/productHome');



const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
}


server.use(express.json());
server.use('/',productHomeRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server started");
})