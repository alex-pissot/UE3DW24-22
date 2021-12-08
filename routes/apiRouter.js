const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

exports.router = (function() {
    const apiRouter = express.Router();
        apiRouter.route('/users').get(usersCtrl.getAllUsers);
        apiRouter.route('/users/:id').get(usersCtrl.getOneUser);
        apiRouter.route('/create-user').post(usersCtrl.createUser);
        apiRouter.route('/update-user').put(usersCtrl.updateUser);
        apiRouter.route('/delete-user').delete(usersCtrl.deleteUser);
        
        return apiRouter;
})();

