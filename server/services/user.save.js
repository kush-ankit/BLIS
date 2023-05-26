const userModel = require("../data/user.model.js");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const userSave = {
    save: async ({ phone, user, password, fullName }) => {
        var userM = new userModel({
            phone,
            user,
            password: bcrypt.hashSync(password, salt),
            fullName
        });
        var user = await userM.save();
        return user;
    },
};

module.exports = userSave;