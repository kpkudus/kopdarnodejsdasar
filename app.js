const express = require('express');
const app = express();
const stylus = require('stylus');
const mysql = require('mysql');


var PORT = process.env.PORT || 8000;
const route = require('./route');
app.set('view engine','pug')
app.set('views','./views')
app.get("/",(req,res,next) => {
  res.send("Home");
});

//MYSQL CONNECTION

const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'0000000',
  database:'toko_buku'
})
connection.connect()

//impor buku
const Buku = require('./buku');
//buat instance buku (gunakan)
const buku = new Buku(connection);


app.use(stylus.middleware({
  src : __dirname + "/src/css",
  dest : __dirname + "/assets/css",
  compress : true
}))
app.use(express.static('./assets'))

app.get('/buku',buku.index)
.get('/buku/new',buku.add)
app.listen(8000, () => {
  console.log("Aplikasi berjalan tadaaaa")
})
