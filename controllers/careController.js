const CareRepository = require("../repository/sequelize/CareRepository");
const CatRepository = require("../repository/sequelize/CatRepository");
const CaretakerRepository = require("../repository/sequelize/CaretakerRepository");

exports.showCareList = (req, res, next) => {
    CareRepository.getCares()
        .then(cares => {
            res.render('pages/care/list', {
                cares: cares,
                navLocation: 'care'
            });
        });
};

exports.showAddCareForm = (req, res, next) => {
    let allCats, allCaretakers;
    CatRepository.getCats()
        .then(cats => {
            allCats = cats;
            return CaretakerRepository.getCaretakers();
        })
        .then(caretakers => {
            allCaretakers = caretakers;

            res.render('pages/care/form', {
                care: {},
                formMode: 'createNew',
                allCats: allCats,
                allCaretakers: allCaretakers,
                pageTitle: 'Nowy opieka',
                btnLabel: 'Dodaj opiekę',
                formAction: '/cares/add',
                navLocation: 'care',
                validationErrors: []
            });
        });
};

exports.showEditCareForm = (req, res, next) => {
    let allCats, allCaretakers;
    CatRepository.getCats()
        .then(cats => {
            allCats = cats;
            return CaretakerRepository.getCaretakers();
        })
        .then(caretakers => {
            allCaretakers = caretakers;

            const careId = req.params.careId;
            CareRepository.getCareById(careId)
                .then(care => {
                    res.render('pages/care/form', {
                        care: care,
                        formMode: 'edit',
                        pageTitle: 'Edycja opieki',
                        btnLabel: 'Edytuj opiekę',
                        allCats: allCats,
                        allCaretakers: allCaretakers,
                        formAction: '/cares/edit',
                        navLocation: 'care',
                        validationErrors: []
                    });
                });
        });
};

exports.showCareDetails = (req, res, next) => {
    let allCats, allCaretakers;
    CatRepository.getCats()
        .then(cats => {
            allCats = cats;
            return CaretakerRepository.getCaretakers();
        })
        .then(caretakers => {
            allCaretakers = caretakers;

            const careId = req.params.careId;
            CareRepository.getCareById(careId)
                .then(care => {
                    res.render('pages/care/form', {
                        care: care,
                        formMode: 'showDetails',
                        pageTitle: 'Szczegóły opieki',
                        allCats: allCats,
                        allCaretakers: allCaretakers,
                        formAction: '',
                        navLocation: 'care',
                        validationErrors: []
                    });
                });
        });
};

exports.addCare = (req, res, next) => {
    let allCats, allCaretakers;
    CatRepository.getCats()
        .then(cats => {
            allCats = cats;
            return CaretakerRepository.getCaretakers();
        })
        .then(caretakers => {
            allCaretakers = caretakers;

            const careData = { ...req.body };
            CareRepository.createCare(careData)
                .then( result => {
                    res.redirect('/cares');
                })
                .catch(err => {
                    res.render('pages/care/form', {
                        care: careData,
                        formMode: 'createNew',
                        allCats: allCats,
                        allCaretakers: allCaretakers,
                        pageTitle: 'Nowy opieka',
                        btnLabel: 'Dodaj opiekę',
                        formAction: '/cares/add',
                        navLocation: 'care',
                        validationErrors: err.errors
                    })
                });
            });
};

exports.updateCare = (req, res, next) => {
    let allCats, allCaretakers;
    CatRepository.getCats()
        .then(cats => {
            allCats = cats;
            return CaretakerRepository.getCaretakers();
        })
        .then(caretakers => {
            allCaretakers = caretakers;

            const careId = req.body._id;
            const careData = { ...req.body };
            CareRepository.updateCare(careId, careData)
                .then( result => {
                    res.redirect('/cares');
                })
                .catch(err => {
                    res.render('pages/care/form', {
                        care: careData,
                        formMode: 'edit',
                        pageTitle: 'Edycja opieki',
                        btnLabel: 'Edytuj opiekę',
                        allCats: allCats,
                        allCaretakers: allCaretakers,
                        formAction: '/cares/edit',
                        navLocation: 'care',
                        validationErrors: err.errors
                    })
                });
        });
};

exports.deleteCare = (req, res, next) => {
    const careId = req.params.careId
    CareRepository.deleteCare(careId)
        .then( result => {
            res.redirect('/cares');
        });
};