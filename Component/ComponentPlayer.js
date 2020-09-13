class ComponentPlayer extends Component {
    constructor(gameArea, width, height, x, y, angle, color, type, speed,
        health, bullet, cooldown, forwardSpeed, backwardSpeed, turnSpeed, bulletSpeed, abilityTripleShot) {
        super(gameArea, width, height, x, y, angle, color, type);
        this.speed = speed;
        this.timerShoot = 0;
        this.maxHealth = health;
        this.health = health;
        this.maxBullet = bullet;
        this.bullet = 0;
        this.cooldownShoot = cooldown;
        this.forwardSpeed = forwardSpeed;
        this.backwardSpeed = backwardSpeed;
        this.turnSpeed = turnSpeed;
        this.bulletSpeed = bulletSpeed;
        this.abilityTripleShot = abilityTripleShot;
        this.autoFire = false;
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

        if (this.abilityTripleShot) {
            this.gameAreaContext.save();
            this.gameAreaContext.translate(this.x, this.y);
            this.gameAreaContext.rotate(this.angle + (Math.PI / 4));
            this.gameAreaContext.fillStyle = "black";
            this.gameAreaContext.fillRect((this.width / 8) / -2, (this.height / 2) / -2, this.width / 8, this.height / 3);
            this.gameAreaContext.restore();

            this.gameAreaContext.save();
            this.gameAreaContext.translate(this.x, this.y);
            this.gameAreaContext.rotate(this.angle - (Math.PI / 4));
            this.gameAreaContext.fillStyle = "black";
            this.gameAreaContext.fillRect((this.width / 8) / -2, (this.height / 2) / -2, this.width / 8, this.height / 3);
            this.gameAreaContext.restore();
        }
    }
}