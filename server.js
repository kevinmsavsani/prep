var express = require('express');
var app = express();
var users = {
    "user1" : {
       "name" : "mahesh",
       "password" : "password1",
       "profession" : "teacher",
       "id": 1
    },
 }

app.get('/', function (req, res) {
      res.send( users );
})

var server = app.listen(8081, function () {
   console.log("Example app listening at http://localhost:8081")
})

//command to start - node server.js
