const TreatmentRepository = require('../repository/sequelize/TreatmentRepository');

exports.getTreatments = (req, res, next) => {
    TreatmentRepository.getTreatments()
        .then(treatments => {
            res.status(200).json(treatments);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getTreatmentById = (req, res, next) => {
    const treatmentId = req.params.treatmentId;
    TreatmentRepository.getTreatmentById(treatmentId)
        .then(treatment => {
            if (!treatment) {
                res.status(404).json({
                    message: 'Treatment with id: '+treatmentId+' not found'
                })
            } else {
                res.status(200).json(treatment);
            }
        });
};

exports.createTreatment = (req, res, next) => {
    TreatmentRepository.createTreatment(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateTreatment = (req, res, next) => {
    const treatmentId = req.params.treatmentId;
    TreatmentRepository.updateTreatment(treatmentId, req.body)
        .then(result => {
            res.status(200).json({message: 'Treatment updated!', treatment: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteTreatment = (req, res, next) => {
    const treatmentId = req.params.treatmentId;
    TreatmentRepository.deleteTreatment(treatmentId)
        .then(result => {
            res.status(200).json({message: 'Removed treatment', treatment: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};