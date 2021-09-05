module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      playerName: String,
      score: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const LeaderboardEntry = mongoose.model("leaderboardEntry", schema);

  return LeaderboardEntry;
};
