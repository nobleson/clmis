// External Dependancies

// Get Data Models
const Advert = require('../../models/company/Advert')

exports.create = (req, res) => {
    // Validate request
    //console.log("advert in json:  "+JSON.stringify(req.body));

    const advert = new Advert(req.body);

    // Save artisan in the database
    advert.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the company."
        });
    });
};

exports.findAll = (req, res) => {
    Advert.find()
    .then(advert => {
        res.send(advert);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    Advert.findById(req.params.advertId) 
    .then(advert => { 
        if(!advert) {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.advertId
            });            
        }
        res.send(advert);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.advertId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.advertId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.advertId
    const art = req.body
    const { ...updateData } = art
    JobAdvert.findByIdAndUpdate(id,updateData,{new: true})
    .then(advert => {
        if(!advert) {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.advertId
            });
        }
        res.send(advert);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.advertId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.advertId
        });
    });
};
exports.delete = (req, res) => {
    Advert.findByIdAndRemove(req.params.advertId) 
    .then(advert => {
        if(!advert) {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.advertId
            });
        }
        res.send({message: "company deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "job Advent not found with id " + req.params.advertId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.advertId
        });
    });
};