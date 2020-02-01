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
var retrenchement  = require('../../controllers/company/Retrenchement');

router.get('/getall', retrenchement.findAll);

// POST request for creating retrenchement.
router.post('/create', retrenchement.create);

// PUT request to update retrenchement.
router.put('/:retrenchementId', retrenchement.update);

// DELETE request to delete retrenchement.
router.delete('/:retrenchementId', retrenchement.delete);
// GET request to get one labourStatistic.
router.get('/:retrenchementId', retrenchement.findOne);

module.exports = router;