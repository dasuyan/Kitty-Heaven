const Cat = require('../../model/sequelize/Cat');
const Caretaker = require('../../model/sequelize/Caretaker');
const Care = require('../../model/sequelize/Care');

exports.getCats = () => {
    return Cat.findAll();
}

exports.getCatById = (catId) => {
    return Cat.findByPk(catId,
        {
            include: [{
                model: Care,
                as: 'cares',
                include: [{
                    model: Caretaker,
                    as: 'caretaker'
                }]
            }]
        });
};

exports.createCat = (newCatData) => {
    return Cat.create({
        name: newCatData.name,
        age: newCatData.age,
        breed: newCatData.breed
    });
};

exports.updateCat = (catId, catData) => {
    const name = catData.name;
    const age = catData.age;
    const breed = catData.breed;

    return Cat.update(catData, {where: {_id: catId}});
};

exports.deleteCat = (catId) => {
    return Cat.destroy({
        where: {_id: catId}
    });
}