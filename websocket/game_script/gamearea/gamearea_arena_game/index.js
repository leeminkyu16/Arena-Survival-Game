const { GameArea } = require("../gamearea/");
const { ComponentEnemy } = require("../../component/component_enemy");
const { toDrawData } = require("./to_draw_data");
const { refresh } = require("./refresh");
const { gameTickAction } = require("./game_tick_action");
const { updateWave } = require("./update_wave");
const { spawnEnemy } = require("./spawn_enemy");
const { setButtonActions } = require("./set_button_actions");

class GameAreaArenaGame extends GameArea {
  constructor(
    socketio,

    componentMapPlayer = null,
    componentArrayEnemy = [],

    timerSpawn = 0,
    cooldownSpawn = 250,
    chanceSpawn = 25,

    currentWave = 0,
    maxWave = 5,
    timerCooldownSpawnDecrease = 0,
    cooldownCooldownSpawnDecrease = 2250,

    timerChanceSpawnIncrease = 0,
    cooldownChanceSpawnIncrease = 1500
  ) {
    super(socketio);
    if (componentMapPlayer == null) {
      this.componentMapPlayer = new Map();
    }

    this.componentArrayEnemy = componentArrayEnemy.map(function (element) {
      return new ComponentEnemy(
        self,
        element.width,
        element.height,
        element.x,
        element.y,
        element.angle,
        element.color,
        element.type,
        element.speed,
        element.health,
        element.cooldownShoot,
        element.moveAngle,
        element.timerShoot,
        element.componentBulletArray
      );
    });

    this.timerSpawn = timerSpawn;
    this.cooldownSpawn = cooldownSpawn;
    this.chanceSpawn = chanceSpawn;

    this.currentWave = currentWave;
    this.maxWave = maxWave;

    this.timerCooldownSpawnDecrease = timerCooldownSpawnDecrease;
    this.cooldownCooldownSpawnDecrease = cooldownCooldownSpawnDecrease;

    this.timerChanceSpawnIncrease = timerChanceSpawnIncrease;
    this.cooldownChanceSpawnIncrease = cooldownChanceSpawnIncrease;
  }
}

GameAreaArenaGame.prototype.refresh = refresh;
GameAreaArenaGame.prototype.toDrawData = toDrawData;
GameAreaArenaGame.prototype.gameTickAction = gameTickAction;
GameAreaArenaGame.prototype.updateWave = updateWave;
GameAreaArenaGame.prototype.spawnEnemy = spawnEnemy;
GameAreaArenaGame.prototype.setButtonActions = setButtonActions;

exports.GameAreaArenaGame = GameAreaArenaGame;
