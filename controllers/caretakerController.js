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
        navLocation: 'caretaker'
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
                navLocation: 'caretaker'
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
                navLocation: 'caretaker'
            });
        });
};

exports.addCaretaker = (req, res, next) => {
    const caretakerData = { ...req.body };
    CaretakerRepository.createCaretaker(caretakerData)
        .then( result => {
            res.redirect('/caretakers');
        });
};

exports.updateCaretaker = (req, res, next) => {
    const caretakerId = req.body._id;
    const caretakerData = { ...req.body };
    CaretakerRepository.updateCaretaker(caretakerId, caretakerData)
        .then( result => {
            res.redirect('/caretakers');
        });
};

exports.deleteCaretaker = (req, res, next) => {
    const caretakerId = req.params.caretakerId
    CaretakerRepository.deleteCaretaker(caretakerId)
        .then( result => {
            res.redirect('/caretakers');
        });
};