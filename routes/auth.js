/*
    Authentication and User Routes
    /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post(
    '/new', 
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required').isEmail(),
        check('password', 'The password length must be larger than 6').isLength({ min: 6 }),
        validateFields
    ],
    createUser 
);

router.post(
    '/',
    [
        check('email', 'The email is required').isEmail(),
        check('password', 'The password length must be larger than 6').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
);

router.get('/renew', validateJWT ,revalidateToken );

module.exports = router;
