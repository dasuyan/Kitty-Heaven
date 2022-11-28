const express = require('express');
const router = express.Router();
const caretakerController = require('../controllers/caretakerController');

router.get('/', caretakerController.showCaretakerList);
router.get('/add', caretakerController.showAddCaretakerForm);
router.get('/edit/:caretakerId', caretakerController.showEditCaretakerForm);
router.get('/details/:caretakerId', caretakerController.showCaretakerDetails);

router.post('/add', caretakerController.addCaretaker);
router.post('/edit', caretakerController.updateCaretaker);
router.get('/delete/:caretakerId', caretakerController.deleteCaretaker);

module.exports = router;