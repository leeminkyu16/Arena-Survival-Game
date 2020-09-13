function enemyMovement(gameArea, componentEnemy, componentPlayer) {
    

    if (Math.random() * 100 < 2) {
        componentEnemy.speed = 0;
        componentEnemy.speed = Math.floor((Math.random() * 4)) - 1;
    }

    if (Math.random() * 100 < 20) {
        componentEnemy.moveAngle = 0;

        moveAngle = Math.atan2(componentPlayer.y - componentEnemy.y, componentPlayer.x - componentEnemy.x)
                    - (componentEnemy.angle - (Math.PI / 2));

        if (moveAngle > 1) {
            moveAngle = 1;
        }
        else if (moveAngle < -1) {
            moveAngle = -1;
        }

        componentEnemy.moveAngle = moveAngle;
    }

    if (componentEnemy.x < 0) {
        componentEnemy.x += Math.ceil(Math.abs(componentEnemy.speed) * 1.5);
    } 
    else if (componentEnemy.x > gameArea.canvas.width){
        componentEnemy.x -= Math.ceil(Math.abs(componentEnemy.speed) * 1.5);
    }
    else if (componentEnemy.y < 0) {
        componentEnemy.y += Math.ceil(Math.abs(componentEnemy.speed) * 1.5);
    }
    else if (componentEnemy.y > gameArea.canvas.height) {
        componentEnemy.y -= Math.ceil(Math.abs(componentEnemy.speed) * 1.5);
    }

    componentEnemy.newPos();
    componentEnemy.update();
}


function enemyShoot(gameArea, componentEnemy, componentArrayEnemyBullet) {
    if (componentEnemy.timerShoot > 0) {
        componentEnemy.timerShoot -= 1;
    } 
    else if (componentEnemy.timerShoot === 0) {
        componentArrayEnemyBullet.push(new ComponentEnemyBullet(gameArea,
            Math.floor(componentEnemy.width / 6), Math.floor(componentEnemy.width / 3),
            componentEnemy.x, componentEnemy.y,
            componentEnemy.angle, "gray", componentEnemy.color, "enemyBullet", 5, 1));
            componentEnemy.timerShoot = componentEnemy.cooldownShoot;
    }
}


function enemyBulletUpdate(componentEnemyBullet) {
    componentEnemyBullet.newPos();
    componentEnemyBullet.update();
}