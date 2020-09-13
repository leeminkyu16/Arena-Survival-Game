class GameAreaArenaGame extends GameArea {
    constructor(canvas, width, height, gameTickAction,
        labelInformation, labelScore, labelCircles, labelHealth, labelBullets, labelWave,
        score, circles){
        super(canvas, width, height, gameTickAction);

        this.timerSpawn = 0;
        this.cooldownSpawn = 250;
        this.chanceSpawn = 25;

        this.currentWave = 0;
        this.maxWave = 5;

        this.timerCooldownSpawnDecrease = 0;
        this.cooldownCooldownSpawnDecrease = 2250;

        this.timerChanceSpawnIncrease = 0;
        this.cooldownChanceSpawnIncrease = 1500;

        this.labelInformation = labelInformation;
        this.labelScore = labelScore;
        this.labelCircles = labelCircles;
        this.labelHealth = labelHealth;
        this.labelBullets = labelBullets;
        this.labelWave = labelWave;
        this.score = score;
        this.circles = circles;

        this.stickyEKey = false;
        this.stickySpaceKey = false;
    }

    updateInformation(stringMessage) {
        this.labelInformation.innerHTML = stringMessage;
    }

    updateScore() {
        this.labelScore.innerHTML = "Score: " + this.score.toString();
        this.labelCircles.innerHTML = "Circles: " + this.circles.toString();
    }

    updateWave() {
        this.labelWave.innerHTML = "Wave " + this.currentWave.toString() + " of "
        + this.maxWave.toString();
    }

    updateHealth(health, maxHealth) {
        this.labelHealth.innerHTML = "Health: " + health.toString() + " / " + maxHealth.toString(); 
    }

    updateBullet(bullets, maxBullets) {
        this.labelBullets.innerHTML = "Bullets: " + bullets.toString() + " / " + maxBullets.toString();
    }
}


function spawnEnemy(gameArea, componentArrayEnemy) {
    if (gameArea.timerSpawn > 0) {
        gameArea.timerSpawn -= 1;
    }
    else if (gameArea.timerSpawn <= 0) {
        if (Math.random() * 100 < gameArea.chanceSpawn) {
            componentArrayEnemy.push(new ComponentEnemy(gameArea, 30, 30,
                Math.random() * gameArea.canvas.width, Math.random() * gameArea.canvas.height,
                Math.random() * (Math.PI * 2), "red", "enemyRegular", 0 , 1, 100));
        }

        if (Math.random() * 500 < gameArea.chanceSpawn && gameArea.currentWave > 3) {
            componentArrayEnemy.push(new ComponentEnemy(gameArea, 36, 36,
                Math.random() * gameArea.canvas.width, Math.random() * gameArea.canvas.height,
                Math.random() * (Math.PI * 2), "red", "enemyLarge", 0 , 2, 75));
        }
        
        gameArea.timerSpawn += gameArea.cooldownSpawn;
    }

    if (gameArea.currentWave < gameArea.maxWave) {
        if (gameArea.timerCooldownSpawnDecrease > 0) {
            gameArea.timerCooldownSpawnDecrease -= 1;
        }
        else if (gameArea.timerCooldownSpawnDecrease <= 0) {
            gameArea.cooldownSpawn -= 25;
            gameArea.timerCooldownSpawnDecrease = gameArea.cooldownCooldownSpawnDecrease;
            gameArea.currentWave += 1;
            gameArea.updateWave();
        }
    
        if (gameArea.timerChanceSpawnIncrease > 0) {
            gameArea.timerChanceSpawnIncrease -= 1;
        }
        else if (gameArea.timerChanceSpawnIncrease <= 0) {
            gameArea.chanceSpawn += 5;
            gameArea.timerChanceSpawnIncrease = gameArea.cooldownChanceSpawnIncrease;
        }
    }
}


