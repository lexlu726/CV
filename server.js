const express = require("express");
const app = express();
const request = require("request");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({"extended": true}));
app.use(express.static("static"));



app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})


app.listen(3000,function(){
  console.log("server is on run!")
})
