import { CanvasComponent } from "../canvas_component";
import { update } from "./update";
import { jsonStringifyReplacer } from "./json_stringify_replacer";

class ComponentPlayerBullet extends CanvasComponent {
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

ComponentPlayerBullet.prototype.update = update;
ComponentPlayerBullet.prototype.jsonStringifyReplacer = jsonStringifyReplacer;

export { ComponentPlayerBullet };
