const { ComponentBase } = require("../component_base");
const { toDrawData } = require("./to_draw_data");

class ComponentEnemyBullet extends ComponentBase {
  constructor(
    gameArea,
    width,
    height,
    x,
    y,
    angle,
    color,
    colorShooter,
    type,
    speed,
    health,
    moveAngle = 0
  ) {
    super(gameArea, width, height, x, y, angle, color, type, speed, moveAngle);
    this.colorShooter = colorShooter;
    this.health = health;
  }
}

ComponentEnemyBullet.prototype.toDrawData = toDrawData;

exports.ComponentEnemyBullet = ComponentEnemyBullet;
