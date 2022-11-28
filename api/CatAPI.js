const CatRepository = require('../repository/sequelize/CatRepository');

exports.getCats = (req, res, next) => {
    CatRepository.getCats()
        .then(cats => {
            res.status(200).json(cats);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCatById = (req, res, next) => {
    const catId = req.params.catId;
    CatRepository.getCatById(catId)
        .then(cat => {
            if (!cat) {
                res.status(404).json({
                    message: 'Cat with id: '+catId+' not found'
                })
            } else {
                res.status(200).json(cat);
            }
        });
};

exports.createCat = (req, res, next) => {
    CatRepository.createCat(req.body)
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

exports.updateCat = (req, res, next) => {
    const catId = req.params.catId;
    CatRepository.updateCat(catId, req.body)
        .then(result => {
            res.status(200).json({message: 'Cat updated!', cat: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteCat = (req, res, next) => {
    const catId = req.params.catId;
    CatRepository.deleteCat(catId)
        .then(result => {
            res.status(200).json({message: 'Removed cat', cat: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};