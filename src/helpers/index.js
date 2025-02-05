const bcrypt = require("bcrypt")

const encryptPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

const verifyPassword = async (password, hashPass) => {
    return await bcrypt.compare(password, hashPass);
}

module.exports = {
    encryptPassword,
    verifyPassword
};