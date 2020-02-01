var express = require('express');
var router = express.Router();
var   app     = express();
app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS"); 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next();
     });

// Require controller modules.
var artisanCertificate  = require('../../controllers/artisan/ArtisanCertificate');

router.get('/getall', artisanCertificate.findAll);

// POST request for creating artisan.
router.post('/create', artisanCertificate.create);

// PUT request to update artisan.
router.put('/:artisanCertificateId', artisanCertificate.update);

// DELETE request to delete artisan.
router.delete('/:artisanCertificateId', artisanCertificate.delete);
// GET request to get one artisan.
router.get('/:artisanCertificateId', artisanCertificate.findOne);

module.exports = router;