const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/isAuth');

const caretakerApiController = require('../../api/CaretakerAPI');

router.get('/', caretakerApiController.getCaretakers);
router.get('/:caretakerId', caretakerApiController.getCaretakerById);
router.post('/', isAuth, caretakerApiController.createCaretaker);
router.put('/:caretakerId', caretakerApiController.updateCaretaker);
router.delete('/:caretakerId', caretakerApiController.deleteCaretaker);

module.exports = router;