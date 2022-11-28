const express = require('express');
const router = express.Router();

const caretakerApiController = require('../../api/CaretakerAPI');

router.get('/', caretakerApiController.getCaretakers);
router.get('/:caretakerId', caretakerApiController.getCaretakerById);
router.post('/', caretakerApiController.createCaretaker);
router.put('/:caretakerId', caretakerApiController.updateCaretaker);
router.delete('/:caretakerId', caretakerApiController.deleteCaretaker);

module.exports = router;