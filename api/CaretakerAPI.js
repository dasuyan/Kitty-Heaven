const CaretakerRepository = require('../repository/sequelize/CaretakerRepository');

exports.getCaretakers = (req, res, next) => {
    CaretakerRepository.getCaretakers()
        .then(caretakers => {
            res.status(200).json(caretakers);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCaretakerById = (req, res, next) => {
    const caretakerId = req.params.caretakerId;
    CaretakerRepository.getCaretakerById(caretakerId)
        .then(caretaker => {
            if (!caretaker) {
                res.status(404).json({
                    message: 'Caretaker with id: '+caretakerId+' not found'
                })
            } else {
                res.status(200).json(caretaker);
            }
        });
};

exports.createCaretaker = (req, res, next) => {
    CaretakerRepository.createCaretaker(req.body)
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

exports.updateCaretaker = (req, res, next) => {
    const caretakerId = req.params.caretakerId;
    CaretakerRepository.updateCaretaker(caretakerId, req.body)
        .then(result => {
            res.status(200).json({message: 'Caretaker updated!', caretaker: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteCaretaker = (req, res, next) => {
    const caretakerId = req.params.caretakerId;
    CaretakerRepository.deleteCaretaker(caretakerId)
        .then(result => {
            res.status(200).json({message: 'Removed caretaker', caretaker: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};