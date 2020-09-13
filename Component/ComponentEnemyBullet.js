class ComponentEnemyBullet extends Component {
    constructor (gameArea, width, height, x, y, angle, color, colorShooter, type, speed,
        health){
        super(gameArea, width, height, x, y, angle, color, type, speed)
        this.colorShooter = colorShooter;
        this.health = health;
    }

    update () {
        this.gameAreaContext.save();
        this.gameAreaContext.translate(this.x, this.y);
        this.gameAreaContext.rotate(this.angle);
        this.gameAreaContext.fillStyle = this.color;
        this.gameAreaContext.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        this.gameAreaContext.strokeStyle = this.colorShooter;
        this.gameAreaContext.lineWidth = 1;
        this.gameAreaContext.strokeRect(this.width / -2, this.height / -2, this.width, this.height);
        this.gameAreaContext.restore();
    }
}