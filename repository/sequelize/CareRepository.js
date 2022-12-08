const Sequelize = require('sequelize');

const Cat = require('../../model/sequelize/Cat');
const Caretaker = require('../../model/sequelize/Caretaker');
const Care = require('../../model/sequelize/Care');
const {matchLoggedCaretaker} = require("../../utils/authUtils");

exports.getCares = () => {
    return Care.findAll({include: [
            {
                model: Cat,
                as: 'cat'
            },
            {
                model: Caretaker,
                as: 'caretaker'
            }]
    });
};



exports.getCareById = (careId) => {
    return Care.findByPk(careId, {include: [
            {
                model: Cat,
                as: 'cat'
            },
            {
                model: Caretaker,
                as: 'caretaker'
            }]
    });
};


exports.createCare = (careData) => {
    console.log(JSON.stringify(careData));

    return Care.create({
        cat_id: careData.cat_id,
        caretaker_id: careData.caretaker_id,
        dateFrom: careData.dateFrom,
        dateTo: careData.dateTo,
        totalCost: careData.totalCost,
    });
};

exports.updateCare = (careId, careData) => {
    return Care.update(careData, {where: {_id: careId}});
};

exports.deleteCare = (careId) => {
    return Care.destroy( {
        where: {_id: careId}
    });
};

exports.deleteManyCares = (careIds) => {
    return Care.find({_id: {[Sequelize.Op.in]: careIds}});
};