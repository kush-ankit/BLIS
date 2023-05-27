const express = require('express');
const bodyParser = require('body-parser');
const userModel = require('../data/user.model');
const bcrypt = require('bcrypt');
const userLoginRouter = new express.Router();

userLoginRouter.use(bodyParser.urlencoded({ extended: false }))
userLoginRouter.use(bodyParser.json());

userLoginRouter.get('/', (req, res) => {
    res.send("create a post request to login youself");
});

userLoginRouter.post('/', async (req, res) => {
    const {email, password} = req.body;
    const saveUser = await userModel.find({email: email}).exec();
    if(email !== '' && password !== '') {
        bcrypt.compare(password, saveUser[0].password).then(function(result) {
            if(result){
                res.send(saveUser);
            }else{
                res.status(400).send('Invalid email or Password');
            }
        });
    }else{
        res.status(400).send('Empty email or Password');
    }
});

module.exports = userLoginRouter;