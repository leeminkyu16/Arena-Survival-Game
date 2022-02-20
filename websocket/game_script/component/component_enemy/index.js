const { ComponentBase } = require("../component_base");
const { enemyMovement } = require("./enemy_movement");
const { enemyShoot } = require("./enemy_shoot");
const { enemyBulletsUpdate } = require("./enemy_bullet_update");
const { bulletCollision } = require("./bullet_collision");
const { toDrawData } = require("./to_draw_data");
const { ComponentEnemyBullet } = require("../component_enemy_bullet");

class ComponentEnemy extends ComponentBase {
  constructor(
    gameArea,
    width,
    height,
    x,
    y,
    angle,
    color,
    type,
    speed,
    health,
    cooldownShoot,
    moveAngle = 0,
    timerShoot = 0,
    componentBulletArray = []
  ) {
    super(gameArea, width, height, x, y, angle, color, type, speed, moveAngle);
    this.health = health;
    this.cooldownShoot = cooldownShoot;
    this.timerShoot = timerShoot;

    this.componentBulletArray = componentBulletArray.map(function (element) {
      return new ComponentEnemyBullet(
        gameArea,
        element.width,
        element.height,
        element.x,
        element.y,
        element.angle,
        element.color,
        element.colorShooter,
        element.type,
        element.speed,
        element.health
      );
    });
  }
}

ComponentEnemy.prototype.enemyMovement = enemyMovement;
ComponentEnemy.prototype.enemyShoot = enemyShoot;
ComponentEnemy.prototype.enemyBulletsUpdate = enemyBulletsUpdate;
ComponentEnemy.prototype.toDrawData = toDrawData;
ComponentEnemy.prototype.bulletCollision = bulletCollision;

exports.ComponentEnemy = ComponentEnemy;
