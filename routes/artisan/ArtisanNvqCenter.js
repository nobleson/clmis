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
var artisanNvqCenter  = require('../../controllers/artisan/ArtisanNvqCenter');

router.get('/getall', artisanNvqCenter.findAll);

// POST request for creating artisan.
router.post('/create', artisanNvqCenter.create);

// PUT request to update artisan.
router.put('/:artisanNvqCenterId', artisanNvqCenter.update);

// DELETE request to delete artisan.
router.delete('/:artisanNvqCenterId', artisanNvqCenter.delete);
// GET request to get one artisan.
router.get('/:artisanNvqCenterId', artisanNvqCenter.findOne);

module.exports = router;
