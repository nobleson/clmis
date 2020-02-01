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
var artisanEducation  = require('../../controllers/artisan/ArtisanEducation');

router.get('/getall', artisanEducation.findAll);

// POST request for creating artisan.
router.post('/create', artisanEducation.create);

// PUT request to update artisan.
router.put('/:artisanEducationId', artisanEducation.update);

// DELETE request to delete artisan.
router.delete('/:artisanEducationId', artisanEducation.delete);
// GET request to get one artisan.
router.get('/:artisanEducationId', artisanEducation.findOne);

module.exports = router;