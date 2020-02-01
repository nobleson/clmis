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
var artisan  = require('../../controllers/artisan/Artisan');

router.get('/getall', artisan.findAll);

// POST request for creating artisan.
router.post('/create', artisan.create);

// PUT request to update artisan.
router.put('/:artisanId', artisan.update);

// DELETE request to delete artisan.
router.delete('/:artisanId', artisan.delete);
// GET request to get one artisan.
router.get('/:artisanId', artisan.findOne);

module.exports = router;