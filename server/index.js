const app = require("express")();
const dotenv = require('dotenv').config();

app.listen("5001", (error) => {
  if (error) {
    throw error;
  }


  console.log(`listening on port ${process.env.PORT || 5001}`);
});
