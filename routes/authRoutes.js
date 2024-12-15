const express = require('express');
const { signup, signin , getAllUsers} = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/users', getAllUsers);



module.exports = router;
