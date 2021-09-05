import { mongoDB } from "../http-common";

class LeaderboardDataService {
  static async getAll(playerName, scoreOrder) {
    return mongoDB
      .get(`/leaderboard/?playerName=${playerName}&scoreOrder=${scoreOrder}`)
      .catch((e) => {
        console.log(e);
      });
  }

  static async post(playerName, score) {
    mongoDB
      .post(`/leaderboard/`, { playerName: playerName, score: score })
      .catch((e) => {
        console.log(e);
      });
  }
}

export { LeaderboardDataService };
