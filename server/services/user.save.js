const userModel = require("../schema/user.model.js");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const userSave = {
    save: async ({ phone, email, password, fullName }) => {
        var userM = new userModel({
            phone,
            email,
            password: bcrypt.hashSync(password, salt),
            fullName
        });
        var user = await userM.save();
        return user;
    },
};

module.exports = userSave;