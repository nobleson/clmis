// External Dependancies

// Get Data Models
const Application = require('../../models/company/Application')


exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const application = new Application(req.body);

    // Save artisan in the database
    application.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the application."
        });
    });
};

exports.findAll = (req, res) => {
    Application.find()
    .then(application => {
        res.send(application);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    Application.findById(req.params.applicationId)
    .then(application => {
        if(!application) {
            return res.status(404).send({
                message: "application not found with id " + req.params.applicationId
            });            
        }
        res.send(application);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "application not found with id " + req.params.applicationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.applicationId
        });
    });
};
exports.delete = (req, res) => {
    Application.findByIdAndRemove(req.params.applicationId)
    .then(application => {
        if(!application) {
            return res.status(404).send({
                message: "application not found with id " + req.params.applicationId
            });
        }
        res.send({message: "application deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "application not found with id " + req.params.applicationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.applicationId
        });
    });
};