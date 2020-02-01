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
var apprentice  = require('../../controllers/center/Apprentice');

router.get('/getall', apprentice.findAll);

// POST request for creating centerReport.
router.post('/create', apprentice.create);

// PUT request to update centerReport.
router.put('/:apprenticeId', apprentice.update);

// DELETE request to delete centerReport.
router.delete('/:apprenticeId', apprentice.delete);
// GET request to get one centerReport.
router.get('/:apprenticeId', apprentice.findOne);

module.exports = router;