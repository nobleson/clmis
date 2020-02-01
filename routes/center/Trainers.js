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
var trainers  = require('../../controllers/center/Trainers');

router.get('/getall', trainers.findAll);

// POST request for creating centerReport.
router.post('/create', trainers.create);

// PUT request to update centerReport.
router.put('/:trainerId', trainers.update);

// DELETE request to delete centerReport.
router.delete('/:trainerId', trainers.delete);
// GET request to get one centerReport.
router.get('/:trainerId', trainers.findOne);

module.exports = router;