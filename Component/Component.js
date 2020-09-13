class Component {
    constructor(gameArea, width, height, x, y, angle, color, type, speed) {
        this.gameAreaContext = gameArea.context;
        this.type = type;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.angle = angle;
        this.moveAngle = 0;
        this.x = x;
        this.y = y;
    }

    update () {
        this.gameAreaContext.save();
        this.gameAreaContext.translate(this.x, this.y);
        this.gameAreaContext.rotate(this.angle);
        this.gameAreaContext.fillStyle = this.color;
        this.gameAreaContext.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        this.gameAreaContext.restore();
    }

    newPos () {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
    }
}