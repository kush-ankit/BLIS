const express = require('express');

const userLoginRouter = new express.Router();

userLoginRouter.get('/', (req, res) => {
    res.send("create a post request to login youself");
})

module.exports = userLoginRouter;