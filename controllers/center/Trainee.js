// External Dependancies

// Get Data Models
const Trainee = require('../../models/center/Trainee')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const trainee = new Trainee(req.body);

    // Save center in the database
    trainee.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while trainee the center."
        });
    });
};

exports.findAll = (req, res) => {
    Trainee.find()
    .then(trainee => {
        res.send(trainee);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Trainee.findById(req.params.traineeId)
    .then(trainee => {
        if(!trainee) {
            return res.status(404).send({
                message: "Trainee not found with id " + req.params.traineeId
            });            
        }
        res.send(trainee);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Trainee not found with id " + req.params.traineeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.traineeId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.traineeId
    const art = req.body
    const { ...updateData } = art
    Trainee.findByIdAndUpdate(id,updateData,{new: true})
    .then(trainee => {
        if(!trainee) {
            return res.status(404).send({
                message: "trainee not found with id " + req.params.traineeId
            });
        }
        res.send(trainee);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "trainee not found with id " + req.params.traineeId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.traineeId
        });
    });
};
exports.delete = (req, res) => {
    Trainee.findByIdAndRemove(req.params.traineeId)
    .then(trainee => {
        if(!trainee) {
            return res.status(404).send({
                message: "trainee not found with id " + req.params.traineeId
            });
        }
        res.send({message: "trainee deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "trainee not found with id " + req.params.traineeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.traineeId
        });
    });
};