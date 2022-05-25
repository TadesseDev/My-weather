import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.listen(process.env.PORT || 5000, () => { console.log("app is running on port 4000") })

app.get('/', (req, res) => {
  res.send("You are hitting the root server");
});