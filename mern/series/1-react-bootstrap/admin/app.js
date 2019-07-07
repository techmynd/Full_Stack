const express = require("express");
const app = express();
// route with path or url / and a callback function that calls a handler
// middleware
app.use((req, res, next) => {
  res.status(200).json({
    message: "it works...!",
  });
});
module.exports = app;
// http://localhost:5000/
