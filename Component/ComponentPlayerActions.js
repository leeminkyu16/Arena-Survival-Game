function playerMovement(gameArea, componentPlayer) {
    componentPlayer.moveAngle = 0;
    componentPlayer.speed = 0;
    
    if (gameArea.keys && (gameArea.keys[37] || gameArea.keys[65])) {
        componentPlayer.moveAngle = -1 * componentPlayer.turnSpeed;
    }
    if (gameArea.keys && (gameArea.keys[39] || gameArea.keys[68])) {
        componentPlayer.moveAngle = componentPlayer.turnSpeed;
    }
    if (gameArea.keys && (gameArea.keys[38] || gameArea.keys[87])){
        componentPlayer.speed = componentPlayer.forwardSpeed;

        if (componentPlayer.x < 0) {
            componentPlayer.x += Math.ceil(Math.abs(componentPlayer.speed) * 1.5);
        } 
        else if (componentPlayer.x > gameArea.canvas.width){
            componentPlayer.x -= Math.ceil(Math.abs(componentPlayer.speed) * 1.5);
        }
        else if (componentPlayer.y < 0) {
            componentPlayer.y += Math.ceil(Math.abs(componentPlayer.speed) * 1.5);
        }
        else if (componentPlayer.y > gameArea.canvas.height) {
            componentPlayer.y -= Math.ceil(Math.abs(componentPlayer.speed) * 1.5);
        }
    }
    if (gameArea.keys && (gameArea.keys[40] || gameArea.keys[83])) {
        componentPlayer.speed = -1 * componentPlayer.backwardSpeed;

        if (componentPlayer.x < 0) {
            componentPlayer.x += Math.abs(componentPlayer.speed) * 1.5;
        } 
        else if (componentPlayer.x > gameArea.canvas.width){
            componentPlayer.x -= Math.abs(componentPlayer.speed) * 1.5;
        }
        else if (componentPlayer.y < 0) {
            componentPlayer.y += Math.abs(componentPlayer.speed) * 1.5;
        }
        else if (componentPlayer.y > gameArea.canvas.height) {
            componentPlayer.y -= Math.abs(componentPlayer.speed) * 1.5;
        }
    }
    componentPlayer.newPos();
    componentPlayer.update();    
}


function playerShoot(gameArea, componentPlayer, componentArrayPlayerBullets) {
    // Reload timer
    if (componentPlayer.maxBullet > componentPlayer.bullet) {
        if (componentPlayer.timerShoot <= 0) {
            componentPlayer.timerShoot = componentPlayer.cooldownShoot;
            componentPlayer.bullet += 1;
            gameArea.updateBullet(componentPlayer.bullet, componentPlayer.maxBullet);
        }
        else if (componentPlayer.timerShoot > 0) {
            componentPlayer.timerShoot -= 1;
        }
    } 

    // Auto fire toggle
    if (gameArea.keys && gameArea.keys[69] && (!gameArea.stickyEKey)) {
        gameArea.stickyEKey = true;
        
        if (componentPlayer.autoFire) {
            gameArea.labelInformation.innerHTML = "Manual fire enabled.";
            componentPlayer.autoFire = false;
        }
        else {
            gameArea.labelInformation.innerHTML = "Automatic fire enabled.";
            componentPlayer.autoFire = true;
        }
    }
    else if (! (gameArea.keys && gameArea.keys[69])){
        gameArea.stickyEKey = false;
    }


    // Key handling
    if (gameArea.keys && gameArea.keys[32] && componentPlayer.bullet > 0 &&
        (componentPlayer.autoFire || ! (gameArea.stickySpaceKey))) {
        
        gameArea.stickySpaceKey = true;    

        componentArrayPlayerBullets.push(new ComponentPlayerBullet(gameArea, 5, 10,
            componentPlayer.x, componentPlayer.y, componentPlayer.angle,
            "gray", componentPlayer.color, "playerBullet", componentPlayer.bulletSpeed,
            1));
        componentPlayer.bullet -= 1;
        gameArea.updateBullet(componentPlayer.bullet, componentPlayer.maxBullet);

        if (componentPlayer.abilityTripleShot) {
            componentArrayPlayerBullets.push(new ComponentPlayerBullet(gameArea, 5, 10,
                componentPlayer.x, componentPlayer.y, componentPlayer.angle - (Math.PI / 4),
                "gray", "green", "playerBullet", componentPlayer.bulletSpeed,
                1));
            componentArrayPlayerBullets.push(new ComponentPlayerBullet(gameArea, 5, 10,
                componentPlayer.x, componentPlayer.y, componentPlayer.angle + (Math.PI / 4),
                "gray", "green", "playerBullet", componentPlayer.bulletSpeed,
                1));
        }
    }
    else if (! (gameArea.keys && gameArea.keys[32])) {
        gameArea.stickySpaceKey = false;
    }

    // Displaying player bullets
    componentArrayPlayerBullets.forEach(function(bullet) {
        bullet.newPos();
        bullet.update();
    });
}