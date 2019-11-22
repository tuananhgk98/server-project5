var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');
var cors = require('cors');
router.options('/', cors());

router.post('/signup', cors(), userController.signup);
router.post('/signin', cors(), userController.signin);
router.get('/email', cors(), userController.getAllUserEmail);
router.get('/:id', userController.getUserProfileById);
router.put('/update', userController.updateUserProfile);
router.get('/list', userController.getAllUser);

module.exports = router;
