// External Dependancies

// Get Data Models
const Apprentice = require('../../models/center/Apprentice')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const apprentice = new Apprentice(req.body);

    // Save center in the database
    apprentice.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while apprentice in the center."
        });
    });
};

exports.findAll = (req, res) => {
    Apprentice.find()
    .then(apprentice => {
        res.send(apprentice);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Apprentice.findById(req.params.apprenticeId)
    .then(apprentice => {
        if(!apprentice) {
            return res.status(404).send({
                message: "Trainers not found with id " + req.params.apprenticeId
            });            
        }
        res.send(apprentice);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Trainers not found with id " + req.params.apprenticeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.apprenticeId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.apprenticeId
    const art = req.body
    const { ...updateData } = art
    Apprentice.findByIdAndUpdate(id,updateData,{new: true})
    .then(apprentice => {
        if(!apprentice) {
            return res.status(404).send({
                message: "trainers not found with id " + req.params.apprenticeId
            });
        }
        res.send(apprentice);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "trainers not found with id " + req.params.apprenticeId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.apprenticeId
        });
    });
};
exports.delete = (req, res) => {
    Apprentice.findByIdAndRemove(req.params.apprenticeId)
    .then(apprentice => {
        if(!apprentice) {
            return res.status(404).send({
                message: "trainer not found with id " + req.params.apprenticeId
            });
        }
        res.send({message: "trainer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "trainer not found with id " + req.params.apprenticeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.apprenticeId
        });
    });
};