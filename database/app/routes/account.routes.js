const middleware = require("../middleware/account.middleware")

module.exports = (app) => {
    const account = require("../controllers/account.controller.js");

    var router = require("express").Router();

    router.post("/", account.create);

    router.post("/login", account.login);

    router.post("/logout", middleware.accessAuth, account.logout);

    router.post("/logoutAll", middleware.accessAuth, account.logoutAll);

    router.post("/refresh", middleware.refreshAuth, account.refreshAccessToken);

    router.delete("/", middleware.accessAuth, account.delete);

    app.use("/api/account", router);
};

