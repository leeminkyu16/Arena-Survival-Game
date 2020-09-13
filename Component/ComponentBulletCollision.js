function playerBulletCollision(gameArea, componentArrayPlayerBullet, componentArrayEnemy,
    componentArrayEnemyBullet) {
    var i;
    for (i = 0; i < componentArrayPlayerBullet.length; i++) {
        if (componentArrayPlayerBullet[i].x < 0 || componentArrayPlayerBullet[i].x > gameArea.width ||
            componentArrayPlayerBullet[i].y < 0 || componentArrayPlayerBullet[i].y > gameArea.height) {
                componentArrayPlayerBullet.splice(i, 1);
                continue;
            }
        else {
            var boolHit = false;

            var j;
            for (j = 0; j < componentArrayEnemy.length; j++) {
                if (componentArrayPlayerBullet[i].x - componentArrayPlayerBullet[i].width / 2 <
                    componentArrayEnemy[j].x + componentArrayEnemy[j].width / 2 &&
                    componentArrayPlayerBullet[i].x + componentArrayPlayerBullet[i].width / 2 >
                    componentArrayEnemy[j].x - componentArrayEnemy[j].width / 2 &&
                    componentArrayPlayerBullet[i].y - componentArrayPlayerBullet[i].width / 2 <
                    componentArrayEnemy[j].y + componentArrayEnemy[j].height / 2 &&
                    componentArrayPlayerBullet[i].y + componentArrayPlayerBullet[i].width / 2>
                    componentArrayEnemy[j].y - componentArrayEnemy[j].height / 2) {
                        componentArrayEnemy[j].health -= 1;
                        if (componentArrayEnemy[j].health <= 0) {
                            componentArrayEnemy.splice(j, 1);
                        }
                        componentArrayPlayerBullet[i].health -= 1;
                        if (componentArrayPlayerBullet[i].health <= 0) {
                            componentArrayPlayerBullet.splice(i, 1);
                        }

                        if (componentArrayEnemy[j].type === "enemyRegular") {
                            gameArea.score += 50;
                            gameArea.circles += 50;
                        }
                        else if (componentArrayEnemy[j].type === "enemyLarge") {
                            gameArea.score += 100;
                            gameArea.circles += 100;
                        }
                        
                        gameArea.updateScore();
                        boolHit = true;
                        break;
                }
            }
    
            if (! boolHit) {
                for (j = 0; j < componentArrayEnemyBullet.length; j++) {
                    if (componentArrayPlayerBullet[i].x - componentArrayPlayerBullet[i].width / 2 <
                        componentArrayEnemyBullet[j].x + componentArrayEnemyBullet[j].width / 2 &&
                        componentArrayPlayerBullet[i].x + componentArrayPlayerBullet[i].width / 2 >
                        componentArrayEnemyBullet[j].x - componentArrayEnemyBullet[j].width / 2 &&
                        componentArrayPlayerBullet[i].y - componentArrayPlayerBullet[i].width / 2<
                        componentArrayEnemyBullet[j].y + componentArrayEnemyBullet[j].width / 2 &&
                        componentArrayPlayerBullet[i].y + componentArrayPlayerBullet[i].width / 2 >
                        componentArrayEnemyBullet[j].y - componentArrayEnemyBullet[j].width / 2) {

                        componentArrayEnemyBullet[j].health -= 1;
                        if (componentArrayEnemyBullet[j].health <= 0) {
                            componentArrayEnemyBullet.splice(j, 1);
                        }
                        
                        componentArrayPlayerBullet[i].health -= 1;
                        if (componentArrayPlayerBullet[i].health <= 0) {
                            componentArrayPlayerBullet.splice(i, 1);
                        }
                        break;
                    }
                }
            }
        }   
    }
}


function enemyBulletCollision(gameArea, componentArrayEnemyBullet, componentPlayer) {
    for (i = 0; i < componentArrayEnemyBullet.length; i++) {
        if (componentArrayEnemyBullet[i].x < 0 || componentArrayEnemyBullet[i].x > gameArea.width ||
            componentArrayEnemyBullet[i].y < 0 || componentArrayEnemyBullet[i].y > gameArea.height) {
                componentArrayEnemyBullet.splice(i, 1);
            }
        else if ((componentArrayEnemyBullet[i].x < componentPlayer.x + componentPlayer.width / 2 &&
            componentArrayEnemyBullet[i].x > componentPlayer.x - componentPlayer.width / 2) &&
            (componentArrayEnemyBullet[i].y < componentPlayer.y + componentPlayer.height / 2 &&
                componentArrayEnemyBullet[i].y > componentPlayer.y - componentPlayer.height / 2)) {
            componentArrayEnemyBullet[i].health -= 1;
            if (componentArrayEnemyBullet[i].health <= 0) {
                componentArrayEnemyBullet.splice(i, 1);
            }
            componentPlayer.health -= 1;
            gameArea.updateHealth(componentPlayer.health, componentPlayer.maxHealth);
            if (componentPlayer.health <= 0) {
                gameArea.updateInformation("Game Over");
            }
        }
    }
}