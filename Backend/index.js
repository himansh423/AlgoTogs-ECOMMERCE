require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();

const productHomeRouter = require('./routes/productHome');
const subscribeHomeRouter = require('./routes/subscribeHome');



const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected1");
}


server.use(cors());
server.use(express.json());
server.use('/producthome',productHomeRouter.router);
server.use('/subscriber',subscribeHomeRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server started");
})