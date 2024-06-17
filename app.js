const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
const server = app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);

app.use(express.static(path.join(__dirname, 'public')));