import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
const app = express();
app.listen(process.env.PORT || 5000, () => { console.log("app is running on port 4000") })

function main() {
  mongoose.connect('mongodb://localhost:27017')
    .then(success => console.log("connected success"));
}

app.get('/', (req, res) => {
  res.send("You are hitting the root server");
});

main();