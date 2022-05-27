import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
const app = express();
app.listen(process.env.PORT || 5000, () => { console.log("app is running on port 4000") })

function connect() {
  mongoose.connect('mongodb://localhost:27017/BookStore')
    .then(success => console.log("connected success"));
}
connect();

app.get('/', (req, res) => {
  res.send("You are hitting the root server");
});

import BookStore from "./schema.js";

const book = new BookStore({
  name: 'New York',
  country: 'United States of America',
  countryCode: 'US',
  region: 'New York',
  coord: [42.63, -75.04,],
  population: 8550405,
  distance: 0,
});

book.save();

console.log("end of file");
