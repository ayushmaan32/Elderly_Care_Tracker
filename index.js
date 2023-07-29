// importing Packages
const express = require("express");

const port = 8000;
const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running server :: ${port}`);
  }
  console.log(`Server is up running on :: ${port}`);
});
