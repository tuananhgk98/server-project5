var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');
var cors = require('cors');
router.options('/', cors());

router.post('/signup', cors(), userController.signup);
router.post('/signin', cors(), userController.signin);
router.get('/email', cors(), userController.getAllUserEmail);
router.post('/getProfileByEmail', userController.getUserProfileByEmail);
router.put('/update', userController.updateUserProfile);

module.exports = router;
