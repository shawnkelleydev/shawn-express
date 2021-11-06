const express = require("express");

const app = express();

const route = 3000;
app.listen(route, () => {
  console.log(`The application is running on localhost:${route}.`);
});
