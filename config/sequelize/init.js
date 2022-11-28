const sequelize = require('./sequelize');

const Cat = require('../../model/sequelize/Cat');
const Caretaker = require('../../model/sequelize/Caretaker');
const Care = require('../../model/sequelize/Care');

module.exports = () => {
    Cat.hasMany(Care, {as: 'cares', foreignKey: {name: 'cat_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Care.belongsTo(Cat, {as: 'cat', foreignKey: {name: 'cat_id', allowNull: false}});
    Caretaker.hasMany(Care, {as: 'cares', foreignKey: {name: 'caretaker_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Care.belongsTo(Caretaker, {as: 'caretaker', foreignKey: {name: 'caretaker_id', allowNull: false}});

    let allCats, allCaretakers;
    return sequelize
        .sync({force: true})
        .then( () => {
            return Cat.findAll();
        })
        .then(cats => {
            if (!cats || cats.length === 0) {
                return Cat.bulkCreate([
                    {name: 'Pruti', age: '2', breed: null},
                    {name: 'Leoś', age: '1', breed: 'orange tabby'},
                    {name: 'Tofik', age: '9', breed: 'siamese'},
                ])
                    .then( () => {
                        return Cat.findAll();
                    });
            } else {
                return cats;
            }
        })
        .then( cats => {
            allCats = cats;
            return Caretaker.findAll();
        })
        .then( caretakers => {
            if (!caretakers || caretakers.length === 0) {
                return Caretaker.bulkCreate([
                    {name: 'Artur', surname: 'Konopka', email: 'artur.konopka@kheaven.com', primaryRole: 'Głaskacz'},
                    {name: 'Mateusz', surname: 'Drabarek', email: 'mateusz.drabarek@kheaven.com', primaryRole: 'Sprzątacz kuwet'}
                ])
                    .then( () => {
                        return Cat.findAll();
                    });
            } else {
                return caretakers;
            }
        })
        .then( caretakers => {
            allCaretakers = caretakers;
            return Care.findAll();
        })
        .then(cares => {
            if (!cares || cares.length === 0) {
                return Care.bulkCreate([
                    {cat_id: allCats[0]._id, caretaker_id: allCaretakers[0]._id, totalCost: 300, dateFrom: '2022-06-01T12:00', dateTo: '2022-06-05T21:12'},
                    {cat_id: allCats[1]._id, caretaker_id: allCaretakers[0]._id, totalCost: 1000, dateFrom: '2022-10-07T06:30', dateTo: '2022-10-14T08:44'},
                    {cat_id: allCats[0]._id, caretaker_id: allCaretakers[1]._id, totalCost: 550, dateFrom: '2022-02-01T18:35', dateTo: '2022-02-02T09:05'},
                ])
            } else {
                return cares;
            }
        });
};