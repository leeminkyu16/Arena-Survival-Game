const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.leaderboardEntry = require("./leaderboard.model.js")(mongoose);
db.account = require("./account.model.js")(mongoose);
db.save = require("./save.model")(mongoose);

module.exports = db;