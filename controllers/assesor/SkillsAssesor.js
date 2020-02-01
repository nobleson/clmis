// External Dependancies

// Get Data Models
const SkillsAssesor = require('../../models/assesor/SkillsAssesor')


exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const skillsAssesor = new SkillsAssesor(req.body);

    // Save artisan in the database
    skillsAssesor.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the skill assesor."
        });
    });
};

exports.findAll = (req, res) => {
    SkillsAssesor.find()
    .then(skillsAssesor => {
        res.send(skillsAssesor);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    SkillsAssesor.findById(req.params.skillsAssesorId)
    .then(skillsAssesor => {
        if(!skillsAssesor) {
            return res.status(404).send({
                message: "trade not found with id " + req.params.skillsAssesorId
            });            
        }
        res.send(skillsAssesor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "trade not found with id " + req.params.skillsAssesorId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.skillsAssesorId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.skillsAssesorId
    const art = req.body
    console.log("ID:"+id);
    console.log("BODY:"+JSON.stringify(art));
    const { ...updateData } = art
    SkillsAssesor.findByIdAndUpdate(id,updateData,{new: true})
    .then(skillsAssesor => {
        if(!skillsAssesor) {
            return res.status(404).send({
                message: "skill assesor not found with id " + req.params.skillsAssesorId
            });
        }
        res.send(skillsAssesor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "skill assesor not found with id " + req.params.skillsAssesorId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.skillsAssesorId
        });
    });
};
exports.delete = (req, res) => {
    SkillsAssesor.findByIdAndRemove(req.params.skillsAssesorId)
    .then(skillsAssesor => {
        if(!skillsAssesor) {
            return res.status(404).send({
                message: "skill assesor not found with id " + req.params.skillsAssesorId
            });
        }
        res.send({message: "assesor deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "assesor not found with id " + req.params.skillsAssesorId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.skillsAssesorId
        });
    });
};