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
var traineee  = require('../../controllers/center/Trainee');

router.get('/getall', traineee.findAll);

// POST request for creating centerReport.
router.post('/create', traineee.create);

// PUT request to update centerReport.
router.put('/:traineeId', traineee.update);

// DELETE request to delete centerReport.
router.delete('/:traineeId', traineee.delete);
// GET request to get one centerReport.
router.get('/:traineeId', traineee.findOne);

module.exports = router;