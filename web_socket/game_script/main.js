const { GameAreaArenaGame } = require("./gamearea/gamearea_arena_game");
const { ComponentPlayer } = require("./component/component_player/index");

var gameAreaMain;

exports.startGame = function (socketio) {
  gameAreaMain = new GameAreaArenaGame(socketio);
};

exports.playerJoin = function (id) {
  gameAreaMain.componentMapPlayer.set(
    id,
    new ComponentPlayer(
      gameAreaMain,
      id,
      30,
      30,
      gameAreaMain.width / 2,
      gameAreaMain.height / 1.5,
      0,
      "green",
      "player",
      0,
      3,
      2,
      60,
      2,
      1,
      1,
      5,
      false
    )
  );
};

exports.setKeyPresses = function (socket) {
  socket.on("keydown", (key) => {
    gameAreaMain.componentMapPlayer.get(socket.id).downKeys[key] = true;
  });
  socket.on("keyup", (key) => {
    gameAreaMain.componentMapPlayer.get(socket.id).downKeys[key] = false;
  });
};

exports.setButtonActions = function (socket) {
  gameAreaMain.setButtonActions(socket);
};

exports.playerExit = function (id) {
  gameAreaMain.componentMapPlayer.delete(id);
};

exports.stopGame = function () {};
