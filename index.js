const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀Auto deplyoed via Github Action CICD");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

