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
var artisanEmployementHistory  = require('../../controllers/artisan/ArtisanEmployementHistory');

router.get('/getall', artisanEmployementHistory.findAll);

// POST request for creating artisan.
router.post('/create', artisanEmployementHistory.create);

// PUT request to update artisan.
router.put('/:artisanEmployementHistoryId', artisanEmployementHistory.update);

// DELETE request to delete artisan.
router.delete('/:artisanEmployementHistoryId', artisanEmployementHistory.delete);
// GET request to get one artisan.
router.get('/:artisanEmployementHistoryId', artisanEmployementHistory.findOne);

module.exports = router;