const db = require("../models");
const accountConfig = require("../config/account.config");
const Account = db.account;
const Save = db.save;

exports.create = async (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return
    }

    const account = new Account({
        username: req.body.username,
        password: req.body.password
    })

    try {
        await account.save();
        const refreshToken = await account.generateRefreshToken();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            expires: new Date(Date.now() + (accountConfig.refreshExpires)),
        });

        res.status(201).send({
            account
        });
        return;
    } catch (e) {
        res.status(400).send(e);
        return;
    }
};

exports.login = async (req, res) => {
    try {
        const account = await Account.findByCredentials(req.body.username, req.body.password);
        const refreshToken = await account.generateRefreshToken();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            expires: new Date(Date.now() + (accountConfig.refreshExpires)),
        });

        res.status(200).send({
            account
        });
    } catch (e) {
        res.status(400).send();
    }
};

exports.logout = async (req, res) => {
    try {
        req.account.refreshTokens = req.account.refreshTokens.filter((element) => {
            return element.value !== req.cookies.refreshToken;
        });

        req.account.accessTokens = req.account.accessTokens.filter((element) => {
            return element.value !== req.accessTokenValue;
        });

        await req.account.save();

        res.cookie("refreshToken", "", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });

        res.send();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
};

exports.logoutAll = async (req, res) => {
    try {
        req.account.refreshTokens = [];
        req.account.accessTokens = [];
        await req.account.save();
        res.status(200).send();
    } catch (e) {
        res.status(500).send();
    }
};

exports.refreshAccessToken = async (req, res) => {
    try {
        const account = req.account;

        const accessToken = await account.generateAccessToken();

        res.status(200).send({
            account,
            accessToken
        });
    }
    catch (e) {
        res.status(500).send();
    }
}

exports.delete = async (req, res) => {
    try {
        await Save.deleteMany({
            owner: req.account._id
        });
        await req.account.remove();
        res.status(200).send(req.account);
    } catch (e) {
        res.status(500).send()
    }
};