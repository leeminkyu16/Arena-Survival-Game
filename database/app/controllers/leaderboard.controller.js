const db = require("../models");
const LeaderboardEntry = db.leaderboardEntry;

const stringToOrderMap = {
  'increasing': 1,
  'decreasing': -1,
  '': 0,
  null: 0
}

exports.create = (req, res) => {
  if (!req.body.playerName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const leaderboardEntry = new LeaderboardEntry({
    playerName: req.body.playerName,
    score: req.body.score,
  });
  
  leaderboardEntry
    .save(leaderboardEntry)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the LeaderboardEntry.",
      });
    });
};

exports.findAll = (req, res) => {
  var condition = req.query.playerName
    ? { playerName: { $regex: new RegExp(req.query.playerName), $options: "i" } }
    : {};

  LeaderboardEntry.find(condition).sort({ score: stringToOrderMap[req.query.scoreOrder] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving LeaderboardEntries.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  LeaderboardEntry.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found LeaderboardEntry with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving LeaderboardEntry with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  LeaderboardEntry.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update LeaderboardEntry with id=${id}. Maybe LeaderboardEntry was not found!`,
        });
      } else res.send({ message: "LeaderboardEntry was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating LeaderboardEntry with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  LeaderboardEntry.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete LeaderboardEntry with id=${id}. Maybe LeaderboardEntry was not found!`,
        });
      } else {
        res.send({
          message: "LeaderboardEntry was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete LeaderboardEntry with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
    LeaderboardEntry.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} LeaderboardEntry were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all LeaderboardEntries.",
      });
    });
};
