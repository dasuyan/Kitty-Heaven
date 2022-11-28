const CatRepository = require('../repository/sequelize/CatRepository');

exports.showCatList = (req, res, next) => {
    CatRepository.getCats()
        .then(cats => {
            res.render('pages/cat/list', {
                cats: cats,
                navLocation: 'cat'
            });
        });
};

exports.showAddCatForm = (req, res, next) => {
    res.render('pages/cat/form', {
        cat: {},
        formMode: 'createNew',
        pageTitle: 'Nowy kot',
        btnLabel: 'Dodaj kota',
        formAction: '/cats/add',
        navLocation: 'cat'
        });
};

exports.showEditCatForm = (req, res, next) => {
    const catId = req.params.catId;
    CatRepository.getCatById(catId)
    .then(cat => {
        res.render('pages/cat/form', {
            cat: cat,
            formMode: 'edit',
            pageTitle: 'Edycja kota',
            btnLabel: 'Edytuj kota',
            formAction: '/cats/edit',
            navLocation: 'cat'
        });
    });
};

exports.showCatDetails = (req, res, next) => {
    const catId = req.params.catId;
    CatRepository.getCatById(catId)
        .then(cat => {
            res.render('pages/cat/form', {
                cat: cat,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły kota',
                formAction: '',
                navLocation: 'cat'
            });
        });
};

exports.addCat = (req, res, next) => {
    const catData = { ...req.body };
    CatRepository.createCat(catData)
        .then( result => {
            res.redirect('/cats');
        });
};

exports.updateCat = (req, res, next) => {
    const catId = req.body._id;
    const catData = { ...req.body };
    CatRepository.updateCat(catId, catData)
        .then( result => {
            res.redirect('/cats');
        });
};

exports.deleteCat = (req, res, next) => {
    const catId = req.params.catId
    CatRepository.deleteCat(catId)
        .then( result => {
            res.redirect('/cats');
        });
};