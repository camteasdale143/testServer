const express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send("this is the home page");
})
app.listen(8080, function() {
  console.log("server running on port 8080");
});
