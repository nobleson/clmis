// External Dependancies

// Get Data Models
const Trainers = require('../../models/center/Trainers')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const trainers = new Trainers(req.body);

    // Save center in the database
    trainers.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while trainers in the center."
        });
    });
};

exports.findAll = (req, res) => {
    Trainers.find()
    .then(trainers => {
        res.send(trainers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Trainers.findById(req.params.trainerId)
    .then(trainers => {
        if(!trainers) {
            return res.status(404).send({
                message: "Trainers not found with id " + req.params.trainerId
            });            
        }
        res.send(trainers);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Trainers not found with id " + req.params.trainerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.trainerId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.trainerId
    const art = req.body
    const { ...updateData } = art
    Trainers.findByIdAndUpdate(id,updateData,{new: true})
    .then(trainers => {
        if(!trainers) {
            return res.status(404).send({
                message: "trainers not found with id " + req.params.trainerId
            });
        }
        res.send(trainers);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "trainers not found with id " + req.params.trainerId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.trainerId
        });
    });
};
exports.delete = (req, res) => {
    Trainers.findByIdAndRemove(req.params.trainerId)
    .then(trainers => {
        if(!trainers) {
            return res.status(404).send({
                message: "trainer not found with id " + req.params.trainerId
            });
        }
        res.send({message: "trainer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "trainer not found with id " + req.params.trainerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.trainerId
        });
    });
};