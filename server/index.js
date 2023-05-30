const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const userRouter = require('./controllers/user.controller');
mongoose.connect('mongodb://127.0.0.1:27017/Library');
const app = express();
app.set("view engine", "ejs");


app.use(cors());

app.use(function (req, res, next) {
    console.log("request recived...");
    next();
});

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.json({ fname: "Ankit", lname: "Kushwaha" });
});


app.listen(3001, (req, res) => {
    console.log("listening on port 3001");
});