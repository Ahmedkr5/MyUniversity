const express = require('express');
var router = express.Router();

const University = require('../models/university');


router.get('/', function (req, res, next) {
    University.find(
        (err, univ) => {
            if (err)
                res.send("err")
            else
                res.send(univ);
        });
});
router.post('/', function (req, res, next) {
    University.create(req.body,
        function (err, univ) {
            if (err) return res.status(500).send("error university");
            res.send(univ);
        });
});
router.get('/:id', function(req, res, next) {
    University.findById(
      req.params.id,
      function (err, univ) {
        if (err) return res.status(500).send("err");
        
        res.send(univ);
          });
});




  router.put('/:id', function(req, res, next) {
      University.findByIdAndUpdate(
        req.params.id,
        req.body,
        function (err, univ) {
          if (err) return res.status(500).send("error updating university");
          
          res.send(' university modified');
            });
  });
  
  router.put('/cover/:id', function (req, res) {
    University.findByIdAndUpdate(req.params.id,{
        image : req.body.image,}, {new: true}, function (err, univ) {         
          res.status(200).send(univ);
});
});
router.delete('/:id', function(req, res, next) {
    University.findByIdAndRemove(
    req.params.id,
    function (err, univ) {
        if (err) return res.status(500).send("error deleting university");
        
        res.send('university deleted');
          });
});

router.get('/a/:name', function (req, res) {
  University.find({name: new RegExp(req.params.name, 'i')}, function (err, user) {         
        res.status(200).send(user);
});
});




module.exports = router;