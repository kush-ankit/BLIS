const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var imgSchema = require('../schema/profilePicture.model.js');
var fs = require('fs');
var path = require('path');
const userSave = require('../services/user.save.js');
const userRegisterRouter = new express.Router();

userRegisterRouter.use(bodyParser.urlencoded({ extended: false }))
userRegisterRouter.use(bodyParser.json());

userRegisterRouter.get('/', (req, res) => {
    imgSchema.find({})
        .then((data, err) => {
            if (err) {
                console.log(err);
            }
        })
});

userRegisterRouter.post('/', async (req, res) => {
    const data = await req.body;
    const saveData = await userSave.save(data);
    res.status(200);
    res.send(saveData);
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });


userRegisterRouter.post('/uploadprofilePicture', upload.single('image'), (req, res, next) => {

    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
        .then((err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                // item.save();
                res.redirect('/');
            }
        });
});

module.exports = userRegisterRouter;