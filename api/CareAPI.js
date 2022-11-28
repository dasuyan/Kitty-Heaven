const CareRepository = require('../repository/sequelize/CareRepository');

exports.getCares = (req, res, next) => {
    CareRepository.getCares()
        .then(cares => {
            res.status(200).json(cares);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCareById = (req, res, next) => {
    const careId = req.params.careId;
    CareRepository.getCareById(careId)
        .then(care => {
            if (!care) {
                res.status(404).json({
                    message: 'Care with id: '+careId+' not found'
                })
            } else {
                res.status(200).json(care);
            }
        });
};

exports.createCare = (req, res, next) => {
    CareRepository.createCare(req.body)
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

exports.updateCare = (req, res, next) => {
    const careId = req.params.careId;
    CareRepository.updateCare(careId, req.body)
        .then(result => {
            res.status(200).json({message: 'Care updated!', care: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteCare = (req, res, next) => {
    const careId = req.params.careId;
    CareRepository.deleteCare(careId)
        .then(result => {
            res.status(200).json({message: 'Removed care', care: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteManyCares = (req, res, next) => {
    const careIds = req.body.careIds;
    CareRepository.deleteManyCares(careIds)
        .then(result => {
            res.status(200).json({message: 'Removed cares', care: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};