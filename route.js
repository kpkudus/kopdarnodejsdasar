const express = require('express');
const route = express.Router();



var members = [{
  name : 'tomo',
  age  : 21
},{
  name : 'jono',
  age  : 22
},{
  name : 'vina',
  age  : 22
}
]

route.get("/profile",(req,res,next) => {
  res.render("index",{
    'members':members
  });
})
route.get("/profile",(req,res,next) => {
  res.send("Halaman Profile");
})

module.exports = route;
