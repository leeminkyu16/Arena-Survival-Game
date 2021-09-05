const { newPos } = require("./new_pos");
const { toDrawData } = require("./to_draw_data");

class ComponentBase {
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
    moveAngle = 0
  ) {
    this.gameArea = gameArea;
    this.type = type;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;
    this.angle = angle;
    this.moveAngle = moveAngle;
    this.x = x;
    this.y = y;
  }
}

ComponentBase.prototype.newPos = newPos;
ComponentBase.prototype.toDrawData = toDrawData;

exports.ComponentBase = ComponentBase;
