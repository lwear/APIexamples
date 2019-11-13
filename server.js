const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.static("public"));

 const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });

