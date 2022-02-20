module.exports = (app) => {
  const leaderboard = require("../controllers/leaderboard.controller.js");

  var router = require("express").Router();

  router.post("/", leaderboard.create);

  router.get("/", leaderboard.findAll);

  router.get("/:id", leaderboard.findOne);

  router.put("/:id", leaderboard.update);

  router.delete("/:id", leaderboard.delete);

  router.delete("/", leaderboard.deleteAll);

  app.use("/api/leaderboard", router);
};
