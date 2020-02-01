// External Dependancies

// Get Data Models
const ApprentishipCenter = require('../../models/center/ApprentishipCenter')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const apprentishipCenter = new ApprentishipCenter(req.body);

    // Save center in the database
    apprentishipCenter.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while apprentiship Center  in the center."
        });
    });
};

exports.findAll = (req, res) => {
    ApprentishipCenter.find()
    .then(apprentishipCenter => {
        res.send(apprentishipCenter);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    ApprentishipCenter.findById(req.params.apprentishipCenterId)
    .then(apprentishipCenter => {
        if(!apprentishipCenter) {
            return res.status(404).send({
                message: "Apprentiship Center not found with id " + req.params.apprentishipCenterId
            });            
        }
        res.send(apprentishipCenter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Apprentiship Center not found with id " + req.params.apprentishipCenterId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.apprentishipCenterId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.apprentishipCenterId
    const art = req.body
    const { ...updateData } = art
    ApprentishipCenter.findByIdAndUpdate(id,updateData,{new: true})
    .then(apprentishipCenter => {
        if(!apprentishipCenter) {
            return res.status(404).send({
                message: "apprentiship centerId not found with id " + req.params.apprentishipCenterId
            });
        }
        res.send(apprentishipCenter);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "apprentiship centerId not found with id " + req.params.apprentishipCenterId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.apprentishipCenterId
        });
    });
};
exports.delete = (req, res) => {
    ApprentishipCenter.findByIdAndRemove(req.params.apprentishipCenterId)
    .then(apprentishipCenter => {
        if(!apprentishipCenter) {
            return res.status(404).send({
                message: "trainer not found with id " + req.params.apprentishipCenterId
            });
        }
        res.send({message: "trainer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "trainer not found with id " + req.params.apprentishipCenterId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.apprentishipCenterId
        });
    });
};