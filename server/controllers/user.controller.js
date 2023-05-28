const express = require('express');
const userModel = require('../schema/user.model.js')
const userLoginRouter = require('./user.login');
const userRegisterRouter = require('./user.register');

const userRouter = new express.Router();

userRouter.use('/Login', userLoginRouter)
userRouter.use('/register', userRegisterRouter);

userRouter.get('/', (req, res) => {
    userModel.find().then((user) => { res.send(user) });
})

module.exports = userRouter;