const materialController = require('../controllers/materi');
const router = require('express').Router();

router.post('/', materialController.create);
router.get('/', materialController.getAll);
router.get('/:id', materialController.findOne);
router.put('/:id', materialController.update);
router.delete('/:id', materialController.delete);

module.exports = router;
