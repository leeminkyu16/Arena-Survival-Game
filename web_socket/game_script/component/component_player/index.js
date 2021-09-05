const { ComponentBase } = require("../component_base/index");
const { playerMovement } = require("./player_movement");
const { playerShoot } = require("./player_shoot");
const { bulletCollision } = require("./bullet_collision");
const { toDrawData } = require("./to_draw_data");
const {
  setInformationText,
  updateScore,
  updateHealth,
  updateBullet,
  updateAttackRateCost,
  updateForwardSpeedCost,
  updateBackwardSpeedCost,
  updateTurnSpeedCost,
  updateBulletSpeedCost,
  updateTripleShotCost,
  updateAllInfo,
} = require("./update_info");
const { ComponentPlayerBullet } = require("../component_player_bullet");

class ComponentPlayer extends ComponentBase {
  constructor(
    gameArea,
    id,
    width,
    height,
    x,
    y,
    angle,
    color,
    type,
    speed,
    health,
    maxBullet,
    cooldown,

    forwardSpeed,
    backwardSpeed,
    turnSpeed,
    bulletSpeed,
    abilityTripleShot,

    moveAngle = 0,
    timerShoot = 0,
    bullet = 0,
    autoFire = false,
    componentBulletArray = [],

    score = 0,
    circles = 1000,

    attackRateCost = 300,
    forwardSpeedCost = 300,
    backwardSpeedCost = 300,
    turnSpeedCost = 300,
    bulletSpeedCost = 300,
    tripleShotCost = 1000
  ) {
    super(gameArea, width, height, x, y, angle, color, type, moveAngle);
    this.id = id;
    this.speed = speed;
    this.timerShoot = timerShoot;
    this.maxHealth = health;
    this.health = health;
    this.maxBullet = maxBullet;
    this.bullet = bullet;
    this.cooldownShoot = cooldown;
    this.forwardSpeed = forwardSpeed;
    this.backwardSpeed = backwardSpeed;
    this.turnSpeed = turnSpeed;
    this.bulletSpeed = bulletSpeed;
    this.abilityTripleShot = abilityTripleShot;
    this.autoFire = autoFire;

    this.componentBulletArray = componentBulletArray.map(function (element) {
      return new ComponentPlayerBullet(
        gameArea,
        element.width,
        element.height,
        element.x,
        element.y,
        element.angle,
        element.color,
        element.colorPlayer,
        element.type,
        element.speed,
        element.health
      );
    });

    this.downKeys = {};

    this.score = score;
    this.circles = circles;

    this.attackRateCost = attackRateCost;
    this.forwardSpeedCost = forwardSpeedCost;
    this.backwardSpeedCost = backwardSpeedCost;
    this.turnSpeedCost = turnSpeedCost;
    this.bulletSpeedCost = bulletSpeedCost;
    this.tripleShotCost = tripleShotCost;

    this.stickyEKey = false;
    this.stickySpaceKey = false;

    this.updateAllInfo();
  }
}

ComponentPlayer.prototype.playerMovement = playerMovement;
ComponentPlayer.prototype.playerShoot = playerShoot;
ComponentPlayer.prototype.bulletCollision = bulletCollision;
ComponentPlayer.prototype.toDrawData = toDrawData;

ComponentPlayer.prototype.setInformationText = setInformationText;

ComponentPlayer.prototype.updateScore = updateScore;
ComponentPlayer.prototype.updateHealth = updateHealth;
ComponentPlayer.prototype.updateBullet = updateBullet;

ComponentPlayer.prototype.updateAttackRateCost = updateAttackRateCost;
ComponentPlayer.prototype.updateForwardSpeedCost = updateForwardSpeedCost;
ComponentPlayer.prototype.updateBackwardSpeedCost = updateBackwardSpeedCost;
ComponentPlayer.prototype.updateTurnSpeedCost = updateTurnSpeedCost;
ComponentPlayer.prototype.updateBulletSpeedCost = updateBulletSpeedCost;
ComponentPlayer.prototype.updateTripleShotCost = updateTripleShotCost;

ComponentPlayer.prototype.updateAllInfo = updateAllInfo;

exports.ComponentPlayer = ComponentPlayer;
