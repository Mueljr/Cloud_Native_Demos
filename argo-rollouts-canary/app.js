const express = require("express");
const app = express();
const PORT = 8080;

// version message (start with v1)
app.get("/", (req, res) => {
  res.send("Hello from version v2! We're sure you'll love this new version! 🚀");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
