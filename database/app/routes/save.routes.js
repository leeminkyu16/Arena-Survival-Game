const middleware = require("../middleware/account.middleware")

module.exports = (app) => {
    const save = require("../controllers/save.controllers");

    var router = require("express").Router();

    router.post("/", middleware.accessAuth, save.create);

    router.get("/count", middleware.accessAuth, save.getSaveCount);

    router.get("/all", middleware.accessAuth, save.getSaves);
    
    router.get("/paginated", middleware.accessAuth, save.getPaginatedSaves);

    router.delete("/:id", middleware.accessAuth, save.delete);

    app.use("/api/save", router);
};