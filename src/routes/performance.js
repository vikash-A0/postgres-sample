const router = require('express').Router();

const controller = require('../controllers/performance')

router.post('/create',controller.createOne);
router.get('/getall',controller.getAll);
router.delete('/delete/:id',controller.deleteOne);

module.exports = router;