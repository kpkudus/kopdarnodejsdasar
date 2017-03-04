function Buku(db){
    this.index = (req,res,next) =>{
      db.query("Select * from tb_buku",(err,results) => {
        if (err) throw err;
        //memanggil view buku di folder views (karena di app.js di set semua view ada di situ)
        res.render('buku/index',{
          //variable penampung
          bukus : results
        })
      })
    }
    this.add = (req, res, next) => {
      res.render('buku/new',{
        title : 'Tambah buku'
      })
    }
}
module.exports = Buku;
