import { CanvasComponent } from "../canvas_component";
import { update } from "./update";
import { enemyMovement } from "./enemy_movement";
import { enemyShoot } from "./enemy_shoot";
import { enemyBulletsUpdate } from "./enemy_bullets_update";
import { bulletCollision } from "./bullet_collision";
import { jsonStringifyReplacer } from "./json_stringify_replacer";
import { ComponentEnemyBullet } from "../component_enemy_bullet";

class ComponentEnemy extends CanvasComponent {
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

ComponentEnemy.prototype.update = update;
ComponentEnemy.prototype.enemyMovement = enemyMovement;
ComponentEnemy.prototype.enemyShoot = enemyShoot;
ComponentEnemy.prototype.enemyBulletsUpdate = enemyBulletsUpdate;
ComponentEnemy.prototype.bulletCollision = bulletCollision;
ComponentEnemy.prototype.jsonStringifyReplacer = jsonStringifyReplacer;

export { ComponentEnemy };
