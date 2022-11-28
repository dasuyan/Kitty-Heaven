const express = require('express');
const router = express.Router();

const catApiController = require('../../api/CatAPI');

router.get('/', catApiController.getCats);
router.get('/:catId', catApiController.getCatById);
router.post('/', catApiController.createCat);
router.put('/:catId', catApiController.updateCat);
router.delete('/:catId', catApiController.deleteCat);

module.exports = router;