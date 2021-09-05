import { CanvasComponent } from "../canvas_component";
import { update } from "./update";
import { playerMovement } from "./player_movement";
import { playerShoot } from "./player_shoot";
import { bulletCollision } from "./bullet_collision";
import { jsonStringifyReplacer } from "./json_stringify_replacer";
import { ComponentPlayerBullet } from "../component_player_bullet";

class ComponentPlayer extends CanvasComponent {
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
    componentBulletArray = []
  ) {
    super(gameArea, width, height, x, y, angle, color, type, moveAngle);
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
  }
}

ComponentPlayer.prototype.update = update;
ComponentPlayer.prototype.playerMovement = playerMovement;
ComponentPlayer.prototype.playerShoot = playerShoot;
ComponentPlayer.prototype.bulletCollision = bulletCollision;
ComponentPlayer.prototype.jsonStringifyReplacer = jsonStringifyReplacer;

export { ComponentPlayer };
