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
var application  = require('../../controllers/company/Application');

router.get('/getall', application.findAll);

// POST request for creating artisan.
router.post('/create', application.create);

// PUT request to update artisan.

// DELETE request to delete artisan.
router.delete('/:companyId', application.delete);
// GET request to get one artisan.
router.get('/:companyId', application.findOne);

module.exports = router;