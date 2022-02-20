import { CanvasComponent } from "../canvas_component";
import { update } from "./update";
import { jsonStringifyReplacer } from "./json_stringify_replacer";

class ComponentEnemyBullet extends CanvasComponent {
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

ComponentEnemyBullet.prototype.update = update;
ComponentEnemyBullet.prototype.jsonStringifyReplacer = jsonStringifyReplacer;

export { ComponentEnemyBullet };
