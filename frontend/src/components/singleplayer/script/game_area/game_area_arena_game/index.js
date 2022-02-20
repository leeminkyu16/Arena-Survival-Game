import { GameArea } from "../game_area";
import { ComponentPlayer } from "../../canvas_component/component_player";
import { gameTickAction } from "./game_tick_action";
import { spawnEnemy } from "./spawn_enemy";
import { updateGameFunctions } from "./update_game_functions";
import { setInformationText } from "./set_information_text";
import {
  updateScore,
  updateHealth,
  updateBullet,
  updateWave,
  updateAttackRateCost,
  updateForwardSpeedCost,
  updateBackwardSpeedCost,
  updateTurnSpeedCost,
  updateBulletSpeedCost,
  updateTripleShotCost,
} from "./update";
import {
  buttonAttackRateAction,
  buttonBulletSpeedAction,
  buttonForwardSpeedAction,
  buttonBackwardSpeedAction,
  buttonTurnSpeedAction,
  buttonTripleShotAction,
} from "./button_actions";
import { onGameOver } from "./on_game_over";
import { jsonStringifyReplacer } from "./json_stringify_replacer";
import { ComponentEnemy } from "../../canvas_component/component_enemy";

class GameAreaArenaGame extends GameArea {
  constructor(
    canvas,
    vueComponent,

    componentArrayPlayer = [],
    componentArrayEnemy = [],

    timerSpawn = 0,
    cooldownSpawn = 250,
    chanceSpawn = 25,

    currentWave = 0,
    maxWave = 5,
    timerCooldownSpawnDecrease = 0,
    cooldownCooldownSpawnDecrease = 2250,

    timerChanceSpawnIncrease = 0,
    cooldownChanceSpawnIncrease = 1500,

    score = 0,
    circles = 1000,

    attackRateCost = 300,
    forwardSpeedCost = 300,
    backwardSpeedCost = 300,
    turnSpeedCost = 300,
    bulletSpeedCost = 300,
    tripleShotCost = 1000
  ) {
    super(canvas);

    const self = this;

    if (componentArrayPlayer.length <= 0) {
      this.componentArrayPlayer = [];
      this.componentArrayPlayer.push(
        new ComponentPlayer(
          this,
          30,
          30,
          this.canvas.width / 2,
          this.canvas.height / 1.5,
          0,
          "green",
          "player",
          0,
          3,
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
    } else {
      this.componentArrayPlayer = componentArrayPlayer.map(function (element) {
        return new ComponentPlayer(
          self,
          element.width,
          element.height,
          element.x,
          element.y,
          element.angle,
          element.color,
          element.type,
          element.speed,
          element.maxHealth,
          element.health,
          element.maxBullet,
          element.cooldownShoot,
          element.forwardSpeed,
          element.backwardSpeed,
          element.turnSpeed,
          element.bulletSpeed,
          element.abilityTripleShot,
          element.moveAngle,
          element.timerShoot,
          element.bullet,
          element.autoFire,
          element.componentBulletArray
        );
      });
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

    this.score = score;
    this.circles = circles;

    this.attackRateCost = attackRateCost;
    this.forwardSpeedCost = forwardSpeedCost;
    this.backwardSpeedCost = backwardSpeedCost;
    this.turnSpeedCost = turnSpeedCost;
    this.bulletSpeedCost = bulletSpeedCost;
    this.tripleShotCost = tripleShotCost;

    this.vueComponent = vueComponent;

    this.stickyEKey = false;
    this.stickySpaceKey = false;

    this.setInformationText("Use WASD keys to move and SPACE to shoot.");
    this.updateScore();
    this.updateHealth();
    this.updateGameFunctions();
  }
}

GameAreaArenaGame.prototype.gameTickAction = gameTickAction;
GameAreaArenaGame.prototype.updateGameFunctions = updateGameFunctions;
GameAreaArenaGame.prototype.spawnEnemy = spawnEnemy;

GameAreaArenaGame.prototype.setInformationText = setInformationText;

GameAreaArenaGame.prototype.updateScore = updateScore;
GameAreaArenaGame.prototype.updateHealth = updateHealth;
GameAreaArenaGame.prototype.updateBullet = updateBullet;
GameAreaArenaGame.prototype.updateWave = updateWave;

GameAreaArenaGame.prototype.updateAttackRateCost = updateAttackRateCost;
GameAreaArenaGame.prototype.updateForwardSpeedCost = updateForwardSpeedCost;
GameAreaArenaGame.prototype.updateBackwardSpeedCost = updateBackwardSpeedCost;
GameAreaArenaGame.prototype.updateTurnSpeedCost = updateTurnSpeedCost;
GameAreaArenaGame.prototype.updateBulletSpeedCost = updateBulletSpeedCost;
GameAreaArenaGame.prototype.updateTripleShotCost = updateTripleShotCost;

GameAreaArenaGame.prototype.buttonAttackRateAction = buttonAttackRateAction;
GameAreaArenaGame.prototype.buttonBulletSpeedAction = buttonBulletSpeedAction;
GameAreaArenaGame.prototype.buttonForwardSpeedAction = buttonForwardSpeedAction;
GameAreaArenaGame.prototype.buttonBackwardSpeedAction = buttonBackwardSpeedAction;
GameAreaArenaGame.prototype.buttonTurnSpeedAction = buttonTurnSpeedAction;
GameAreaArenaGame.prototype.buttonTripleShotAction = buttonTripleShotAction;

GameAreaArenaGame.prototype.onGameOver = onGameOver;

GameAreaArenaGame.prototype.jsonStringifyReplacer = jsonStringifyReplacer;

export { GameAreaArenaGame };
