import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose';
const { parsed: { PORT, USER_NAME, PASSWORD } } = dotenv.config();
const app = express();
app.listen(PORT || 5000, () => { console.log(`app is running on port ${PORT}`) })

function connect() {
  mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.3lkqrdw.mongodb.net/?retryWrites=true&w=majority`)
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
