const express = require('express');
const router = express.Router()

const {homeRoutes,add_user,update_user} = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */
router.get('/',homeRoutes);

/**
 * @description add users
 * @method GET / add-user
 */
router.get('/add-user', add_user);

/**
 * @description for Update users
 * @method GET / update-user
 */
router.get('/update-user', update_user);

//API
router.post('/api/users',controller.create);
router.get('/api/users',controller.find);
router.put('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);

module.exports = router