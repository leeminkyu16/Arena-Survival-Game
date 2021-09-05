export function newPos() {
  this.angle += (this.moveAngle * Math.PI) / 180;
  this.x += this.speed * Math.sin(this.angle);
  this.y -= this.speed * Math.cos(this.angle);
}
