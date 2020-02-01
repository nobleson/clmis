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
var apprentishipCenter  = require('../../controllers/center/ApprentishipCenter');

router.get('/getall', apprentishipCenter.findAll);

// POST request for creating centerReport.
router.post('/create', apprentishipCenter.create);

// PUT request to update centerReport.
router.put('/:apprentishipCenterId', apprentishipCenter.update);

// DELETE request to delete centerReport.
router.delete('/:apprentishipCenterId', apprentishipCenter.delete);
// GET request to get one centerReport.
router.get('/:apprentishipCenterId', apprentishipCenter.findOne);

module.exports = router;