var gameAreaMain;
var componentPlayer;
var playerBullets = [];
var componentEnemies = [];
var enemyBullets = [];

function startGame() {
    gameAreaMain = new GameAreaArenaGame(document.getElementById("canvasMain"), 800, 500, gameTickAction,
    document.getElementById("paragraphInformation"), document.getElementById("paragraphScore"),
    document.getElementById("paragraphCircles"), document.getElementById("paragraphHealth"),
    document.getElementById("paragraphBullets"), document.getElementById("paragraphWave"),
    0, 2000);
    componentPlayer = new ComponentPlayer(gameAreaMain, 30, 30,
        gameAreaMain.canvas.width / 2, gameAreaMain.canvas.height / 1.5, 0, "green", "player", 0,
        3, 2, 60, 2, 1, 1, 5, false);
    gameAreaMain.updateScore();
    gameAreaMain.updateWave();
    gameAreaMain.updateHealth(componentPlayer.health, componentPlayer.maxHealth);
    gameAreaMain.updateBullet(componentPlayer.bullet, componentPlayer.maxBullet);
}


function gameTickAction() {
    gameAreaMain.clear();

    spawnEnemy(gameAreaMain, componentEnemies);

    playerMovement(gameAreaMain, componentPlayer);
    playerShoot(gameAreaMain, componentPlayer, playerBullets);

    componentEnemies.forEach(function(enemy) {
        enemyMovement(gameAreaMain, enemy, componentPlayer);
        
        enemyShoot(gameAreaMain, enemy, enemyBullets);
    });

    enemyBullets.forEach(function(bullet) {
        enemyBulletUpdate(bullet);
    });

    playerBulletCollision(gameAreaMain, playerBullets, componentEnemies, enemyBullets);

    enemyBulletCollision(gameAreaMain, enemyBullets, componentPlayer);    
}


function buttonAttackRateAction() {
    var labelCost = document.getElementById("tdAttackRateCost");
    var costOfUpgrade = parseInt(labelCost.innerHTML);

    if (gameAreaMain.circles >= costOfUpgrade) {
        gameAreaMain.circles -= costOfUpgrade;
        componentPlayer.cooldownShoot /= 1.5;
        labelCost.innerHTML = (costOfUpgrade * 2).toString();
        gameAreaMain.updateScore();
    }
    else {
        gameAreaMain.labelInformation.innerHTML = "You have insufficient Circles.";
    }
}


function buttonForwardSpeedAction() {
    var labelCost = document.getElementById("tdForwardSpeedCost");
    var costOfUpgrade = parseInt(labelCost.innerHTML);

    if (gameAreaMain.circles >= costOfUpgrade) {
        gameAreaMain.circles -= costOfUpgrade;
        componentPlayer.forwardSpeed++;
        labelCost.innerHTML = (costOfUpgrade * 2).toString();
        gameAreaMain.updateScore();
    }
    else {
        gameAreaMain.labelInformation.innerHTML = "You have insufficient Circles.";
    }
}


function buttonBackwardSpeedAction() {
    var labelCost = document.getElementById("tdBackwardSpeedCost");
    var costOfUpgrade = parseInt(labelCost.innerHTML);

    if (gameAreaMain.circles >= costOfUpgrade) {
        gameAreaMain.circles -= costOfUpgrade;
        componentPlayer.backwardSpeed++;
        labelCost.innerHTML = (costOfUpgrade * 2).toString();
        gameAreaMain.updateScore();
    }
    else {
        gameAreaMain.labelInformation.innerHTML = "You have insufficient Circles.";
    }
}


function buttonTurnSpeedAction() {
    var labelCost = document.getElementById("tdTurnSpeedCost");
    var costOfUpgrade = parseInt(labelCost.innerHTML);

    if (gameAreaMain.circles >= costOfUpgrade) {
        gameAreaMain.circles -= costOfUpgrade;
        componentPlayer.turnSpeed++;
        labelCost.innerHTML = (costOfUpgrade * 2).toString();
        gameAreaMain.updateScore();
    }
    else {
        gameAreaMain.labelInformation.innerHTML = "You have insufficient Circles.";
    }
}


function buttonBulletSpeedAction() {
    var labelCost = document.getElementById("tdBulletSpeedCost");
    var costOfUpgrade = parseInt(labelCost.innerHTML);

    if (gameAreaMain.circles >= costOfUpgrade) {
        gameAreaMain.circles -= costOfUpgrade;
        componentPlayer.bulletSpeed *= 1.5;
        labelCost.innerHTML = (costOfUpgrade * 2).toString();
        gameAreaMain.updateScore();
    }
    else {
        gameAreaMain.labelInformation.innerHTML = "You have insufficient Circles.";
    }
}


function buttonTripleShotAction() {
    var costOfUpgrade = parseInt(document.getElementById("tdTripleShotCost").innerHTML);

    if (gameAreaMain.circles >= costOfUpgrade) {
        componentPlayer.abilityTripleShot = true;
        gameAreaMain.circles -= costOfUpgrade;
        gameAreaMain.updateScore();
        document.getElementById("buttonTripleShot").disabled = true;
    }
    else {
        gameAreaMain.labelInformation.innerHTML = "You have insufficient Circles.";
    }
}








