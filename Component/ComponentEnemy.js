class ComponentEnemy extends Component {
    constructor(gameArea, width, height, x, y, angle, color, type, speed,
        health, cooldown) {
        super(gameArea, width, height, x, y, angle, color, type, speed);
        this.health = health;
        this.cooldownShoot = cooldown;
        this.timerShoot = 0;
    }

    update () {
        this.gameAreaContext.save();
        this.gameAreaContext.translate(this.x, this.y);
        this.gameAreaContext.rotate(this.angle);
        this.gameAreaContext.fillStyle = this.color;
        this.gameAreaContext.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        this.gameAreaContext.restore();

        this.gameAreaContext.save();
        this.gameAreaContext.translate(this.x, this.y);
        this.gameAreaContext.rotate(this.angle);
        this.gameAreaContext.fillStyle = "black";
        this.gameAreaContext.fillRect((this.width / 6) / -2, (this.height / 2) / -2, this.width / 6, this.height / 3);
        this.gameAreaContext.restore();
    }
}