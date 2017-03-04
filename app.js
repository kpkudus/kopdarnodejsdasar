const express = require('express');
const app = express();
const stylus = require('stylus');


var PORT = process.env.PORT || 8000;
const route = require('./route');
app.set('view engine','pug')
app.set('views','./views')
app.get("/",(req,res,next) => {
  res.send("Home");
});

app.use(stylus.middleware({
  src : __dirname + "/src/css",
  dest : __dirname + "/assets/css",
  compress : true
}))
app.use(express.static('./assets'))

app.use(route);
app.listen(8000, () => {
  console.log("Aplikasi berjalan tadaaaa")
})
