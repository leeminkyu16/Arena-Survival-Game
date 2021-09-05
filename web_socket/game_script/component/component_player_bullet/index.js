const { ComponentBase } = require("../component_base");
const { toDrawData } = require("./to_draw_data");

class ComponentPlayerBullet extends ComponentBase {
  constructor(
    gameArea,
    width,
    height,
    x,
    y,
    angle,
    color,
    colorPlayer,
    type,
    speed,
    health,
    moveAngle = 0
  ) {
    super(gameArea, width, height, x, y, angle, color, type, speed, moveAngle);
    this.colorPlayer = colorPlayer;
    this.health = health;
  }
}

ComponentPlayerBullet.prototype.toDrawData = toDrawData;

exports.ComponentPlayerBullet = ComponentPlayerBullet;
