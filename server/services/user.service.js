const userModel = require("../data/user.model.js");

const userSave = {
    save: async ({ phone, user, password, fullName }) => {
        var userM = new userModel({
            phone,
            user,
            password,
            fullName
        });
        var user = await userM.save();
        return user;
    },
};

module.exports = userSave;