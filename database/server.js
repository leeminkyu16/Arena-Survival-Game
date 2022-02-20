const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const databaseConfig = require("./app/config/db.config");

const app = express();

const allowlist = new Set(databaseConfig.allowlist);

var corsOptions = {
  origin: (origin, callback) => {
    if (allowlist.has(origin)) {
      callback(null, true);
    }
    else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use(cookieParser());

require("./app/routes/leaderboard.routes")(app);
require("./app/routes/account.routes")(app);
require("./app/routes/save.routes")(app);

const PORT = databaseConfig.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
