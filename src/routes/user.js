const router = require('express').Router();
const userController = require('../controllers/user');
// const logincontroller =require('../schema/schema');
router.post('/create',userController.createOne);
router.get('/getall',userController.getAll);
router.delete('/delete',userController.deleteOne);



router.post('/logout',userController.logOut);
router.post('/login',userController.logIn);

router.post('/loginval',userController.validate);

module.exports = router;