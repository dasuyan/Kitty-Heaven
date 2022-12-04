const CaretakerRepository = require('../repository/sequelize/CaretakerRepository');

exports.showCaretakerList = (req, res, next) => {
    CaretakerRepository.getCaretakers()
        .then(caretakers => {
            res.render('pages/caretaker/list', {
                caretakers: caretakers,
                navLocation: 'caretaker'
            });
        });
};

exports.showAddCaretakerForm = (req, res, next) => {
    res.render('pages/caretaker/form', {
        caretaker: {},
        formMode: 'createNew',
        pageTitle: 'Nowy opiekun',
        btnLabel: 'Dodaj opiekuna',
        formAction: '/caretakers/add',
        navLocation: 'caretaker',
        validationErrors: []
    });
};

exports.showEditCaretakerForm = (req, res, next) => {
    const caretakerId = req.params.caretakerId;
    CaretakerRepository.getCaretakerById(caretakerId)
        .then(caretaker => {
            res.render('pages/caretaker/form', {
                caretaker: caretaker,
                formMode: 'edit',
                pageTitle: 'Edycja opiekuna',
                btnLabel: 'Edytuj opiekuna',
                formAction: '/caretakers/edit',
                navLocation: 'caretaker',
                validationErrors: []
            });
        });
};

exports.showCaretakerDetails = (req, res, next) => {
    const caretakerId = req.params.caretakerId;
    CaretakerRepository.getCaretakerById(caretakerId)
        .then(caretaker => {
            res.render('pages/caretaker/form', {
                caretaker: caretaker,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły opiekuna',
                formAction: '',
                navLocation: 'caretaker',
                validationErrors: []
            });
        });
};

exports.addCaretaker = (req, res, next) => {
    const caretakerData = { ...req.body };
    CaretakerRepository.createCaretaker(caretakerData)
        .then( result => {
            res.redirect('/caretakers');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Podany adres email jest już używany";
                }
            });
            res.render('pages/caretaker/form', {
                caretaker: caretakerData,
                formMode: 'createNew',
                pageTitle: 'Nowy opiekun',
                btnLabel: 'Dodaj opiekuna',
                formAction: '/caretakers/add',
                navLocation: 'caretaker',
                validationErrors: err.errors
            })
        });
};

exports.updateCaretaker = (req, res, next) => {
    const caretakerId = req.body._id;
    const caretakerData = { ...req.body };
    const caretaker = CaretakerRepository.getCaretakerById(caretakerId)
    CaretakerRepository.updateCaretaker(caretakerId, caretakerData)
        .then( result => {
            res.redirect('/caretakers');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Podany adres email jest już używany";
                }
            });
            res.render('pages/caretaker/form', {
                caretaker: caretakerData,
                formMode: 'edit',
                pageTitle: 'Edycja opiekuna',
                btnLabel: 'Edytuj opiekuna',
                formAction: '/caretakers/edit',
                navLocation: 'caretaker',
                validationErrors: err.errors
            })
        });
};

exports.deleteCaretaker = (req, res, next) => {
    const caretakerId = req.params.caretakerId
    CaretakerRepository.deleteCaretaker(caretakerId)
        .then( result => {
            res.redirect('/caretakers');
        });
};