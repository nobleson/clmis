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

var advert  = require('../../controllers/company/Advert');

router.get('/getall', advert.findAll);

// POST request for creating artisan.
router.post('/create', advert.create);

// PUT request to update artisan.
router.put('/:advertId', advert.update);

// DELETE request to delete artisan.
router.delete('/:advertId', advert.delete);
// GET request to get one artisan.
router.get('/:advertId', advert.findOne);

module.exports = router;