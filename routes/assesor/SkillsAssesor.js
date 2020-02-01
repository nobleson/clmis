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
var SkillsAssesor  = require('../../controllers/assesor/SkillsAssesor');

router.get('/getall', SkillsAssesor.findAll);

// POST request for creating artisan.
router.post('/create', SkillsAssesor.create);

// PUT request to update artisan.
router.put('/:skillsAssesorId', SkillsAssesor.update);

// DELETE request to delete artisan.
router.delete('/:skillsAssesorId', SkillsAssesor.delete);
// GET request to get one artisan.
router.get('/:skillsAssesorId', SkillsAssesor.findOne);

module.exports = router;