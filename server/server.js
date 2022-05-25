import express from "express";
const app = express();
app.listen(process.env.POR || 4000, () => { console.log("app is running on port 4000") })

app.get('/', (req, res) => {
  res.send("Hitting the root server");
});