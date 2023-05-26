const express = require('express');
const bodyParser = require('body-parser');
const userLoginRouter = new express.Router();

userLoginRouter.use(bodyParser.urlencoded({ extended: false }))
userLoginRouter.use(bodyParser.json());

userLoginRouter.get('/', (req, res) => {
    res.send("create a post request to login youself");
});

userLoginRouter.post('/',(req, res) => {
    const {email, password} = req.body;
    
});

module.exports = userLoginRouter;