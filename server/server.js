import express from "express";
const app = express();
app.listen(process.env.PORT, () => { console.log("app is running on port 4000") })