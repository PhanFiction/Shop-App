const router = require('express').Router();
const userController= require('../controllers/users.js');

router.get('/:userid', userController.getUser);
router.put('/:userid', userController.updateUser);
router.post('/register', userController.createAccount);
router.post('/login', userController.login);

module.exports = router;