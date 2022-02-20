const jwt = require("jsonwebtoken");
const db = require("../models");
const Account = db.account;

module.exports.refreshAuth = async (req, res, next) => {
    try {
        const refreshTokenValue = req.cookies.refreshToken
        // const refreshTokenValue = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(refreshTokenValue, process.env.REFRESH_SECRET);
        const account = await Account.findOne({
            _id: decoded._id,
            "refreshTokens.value": refreshTokenValue
        });

        if (!account) {
            throw new Error();
        }

        req.refreshTokenValue = refreshTokenValue;
        req.account = account;

        next();
    } catch (e) {
        res.status(401).send({
            error: "Please authenicate."
        })
    }
};

module.exports.accessAuth = async (req, res, next) => {
    try {
        const accessTokenValue = req.header("Authorization").replace("Bearer ", "");

        const decoded = jwt.verify(accessTokenValue, process.env.ACCESS_SECRET);
        const account = await Account.findOne({
            _id: decoded._id,
            "accessTokens.value": accessTokenValue
        });

        if (!account) {
            throw new Error();
        }

        req.accessTokenValue = accessTokenValue;
        req.account = account;

        next();
    } catch (e) {
        res.status(401).send({
            error: "Please authenicate."
        })
    }
};