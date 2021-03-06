const express = require('express');
const router = express.Router()

const {homeRoutes,add_user,update_user,create,find} = require('../services/render');

const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */
router.get('/',controller.find);
//router.get('/search/:username',controller.search)

/**
 * @description add users
 * @method GET / add-user
 */
router.get('/add-user', add_user);
router.post('/add-user', controller.create);


/**
 * @description for Update users
 * @method GET / update-user
 */
router.get('/update-user', controller.find);
router.put('/update-user', controller.update);


//API
router.post('/api/users',controller.create);
// router.get('/api/users/search',controller.search)
router.get('/api/users',controller.find);
router.get('/api/users/sum',controller.summ);
router.post('/api/users/:id',controller.update);
router.delete('/api/users/:id',controller.delete);

module.exports = router