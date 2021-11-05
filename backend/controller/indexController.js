
var path = require('path');
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  path.resolve('./backend/public/uploads'))
  },
  
  filename: function (req, file, cb) {
    cb(null, req.params.date + '-' + file.originalname)
   
  }
})
var upload = multer({ storage: storage }).single('file')
class App{  
  uploada = (req, res, err) => {
    upload(req, res, function (err) {
     
      // console.log(req.headers);
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } else if (!req.file) {
        return  res.send(req.file);
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      return res.status(200)
    });
  };
}
const IndexController = new App() ;
module.exports = IndexController