const jwt = require("jsonwebtoken");
const appSecret = require("../config").appSecret;

const getTokenFromHeaders = req => {
    const {
        headers: { authorization }
    } = req;

    if (authorization && authorization.split(" ")[0] === "Bearer") {
        return authorization.split(" ")[1];
    }
    return null;
};

const auth = {
    required: function(req, res, next) {
        jwt.verify(getTokenFromHeaders(req), appSecret, function(err, decode) {
            if (err)
                return res.status(401).json({
                    message: "Unauthorized"
                });
            else {
                req.user = decode;
                next();
            }
        });
    },
    optional: function(req, res, next) {
        next();
    }
};

module.exports = auth;