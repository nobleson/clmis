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
var labourStatistic  = require('../../controllers/company/LabourStatistic');

router.get('/getall', labourStatistic.findAll);

// POST request for creating labourStatistic.
router.post('/create', labourStatistic.create);

// PUT request to update labourStatistic.
router.put('/:labourStatisticId', labourStatistic.update);

// DELETE request to delete labourStatistic.
router.delete('/:labourStatisticId', labourStatistic.delete);
// GET request to get one labourStatistic.
router.get('/:labourStatisticId', labourStatistic.findOne);

module.exports = router;