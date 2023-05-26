const express = require('express');
const bodyParser = require('body-parser');
const userSave = require('../services/user.save.js');
const userRegisterRouter = new express.Router();

userRegisterRouter.use(bodyParser.urlencoded({ extended: false }))
userRegisterRouter.use(bodyParser.json());

userRegisterRouter.get('/', (req, res) => {
    res.send('Welcome to Register by get request');
});

userRegisterRouter.post('/',async (req, res) => {
    const data = await req.body;
    const saveData = await userSave.save(data);
    res.status(200);
    res.send(saveData);
})

module.exports = userRegisterRouter;