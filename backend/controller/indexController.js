var multer = require('multer')
var d = Date.now() ;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  
  filename: function (req, file, cb) {
      const aa =  req.params.date ;
    cb(null, aa+ '-' +file.originalname )
   
  }
})
var upload = multer({ storage: storage }).single('file')
class App{
  uploada = (req,res,err)=>{
    console.log(this.filename);

if(   upload(req, res,err ) )  return res.status(200).json({message: d})
else if(1==1) return res.status(200).json({message: d}) ; 
}
}
const testingApp = new App() ;
module.exports = testingApp