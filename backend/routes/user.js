const router = require('express').Router();
const userController= require('../controllers/users.js');

router.get('/users', userController.getUsers);
router.get('/user/:userid', userController.getUser);

router.put('/user/:userid', userController.updateUser);
router.post('/register', userController.createAccount);
router.post('/login', userController.login);

module.exports = router;