import { update } from "./update";
import { newPos } from "./new_pos";
import { jsonStringifyReplacer } from "./json_stringify_replacer";

class CanvasComponent {
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

CanvasComponent.prototype.update = update;
CanvasComponent.prototype.newPos = newPos;
CanvasComponent.prototype.jsonStringifyReplacer = jsonStringifyReplacer;

export { CanvasComponent };
