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
var center  = require('../../controllers/center/Center');

router.get('/getall', center.findAll);

// POST request for creating center.
router.post('/create', center.create);

// PUT request to update center.
router.put('/:centerId', center.update);

// DELETE request to delete center.
router.delete('/:centerId', center.delete);
// GET request to get one center.
router.get('/:centerId', center.findOne);

module.exports = router;