const express = require("express");
const app = express();
const PORT = 8080;

// version message (start with v1)
app.get("/", (req, res) => {
  res.send("Hello from version v1 - Glad to have you here! 🚀");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
