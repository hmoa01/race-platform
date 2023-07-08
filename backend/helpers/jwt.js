
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');

module.exports = {
    currentToken(payload) {
        return jwt.sign({ payload }, SECRET_KEY , { expiresIn : '1d' } , function(err,token){
            console.log(token);
        } )
    }
}