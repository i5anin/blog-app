const jwt = require('jsonwebtoken');
const {verify} = require("jsonwebtoken")

const sign = process.env.JWT_SECRET;

module.exports = {
    generate(data) {
        return jwt.sign(data, sign, {expiresIn: '30d'});
    },
    verify(token) {
        return verify(token, sign);
    }
}

