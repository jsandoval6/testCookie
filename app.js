const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("Route connected");
});

app.post("/login", (req, res) => {
  res.cookie("test", "this is a test");
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log("server started");
});
