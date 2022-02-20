exports.toDrawData = function () {
  return {
    x: this.x,
    y: this.y,
    angle: this.angle,
    color: this.color,
    width: this.width,
    height: this.height,
    componentBulletArray: this.componentBulletArray.map(function (bullet) {
      return bullet.toDrawData();
    }),
  };
};
