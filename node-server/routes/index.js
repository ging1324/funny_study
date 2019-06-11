var express = require('express');
var router = express.Router();
const userController = require('../controller');



router.get('/', userController.basicAPI)
router.get('/test', userController.testAPI)
router.post('/post_test', userController.postTestAPI)
router.post('/addUser', userController.addUser)

module.exports = router;
