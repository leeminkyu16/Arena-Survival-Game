import { GameAreaArenaGame } from "./game_area/game_area_arena_game";

var gameAreaMain;

export function startGame(canvasVar, vueComponent) {
  if (vueComponent.$store.state.saveData.currentSave == null) {
    gameAreaMain = new GameAreaArenaGame(canvasVar, vueComponent);
  } else {
    const currentSave = JSON.parse(
      vueComponent.$store.state.saveData.currentSave
    );
    gameAreaMain = new GameAreaArenaGame(
      canvasVar,
      vueComponent,
      currentSave.componentArrayPlayer,
      currentSave.componentArrayEnemy,
      currentSave.timerSpawn,
      currentSave.cooldownSpawn,
      currentSave.chanceSpawn,
      currentSave.currentWave,
      currentSave.maxWave,
      currentSave.timerCooldownSpawnDecrease,
      currentSave.cooldownCooldownSpawnDecrease,
      currentSave.timerChanceSpawnIncrease,
      currentSave.cooldownChanceSpawnIncrease,
      currentSave.source,
      currentSave.circles,
      currentSave.attackRateCost,
      currentSave.forwardSpeedCost,
      currentSave.backwardSpeedCost,
      currentSave.turnSpeedCost,
      currentSave.bulletSpeedCost,
      currentSave.tripleShotCost
    );
  }
}

export function stopGame() {
  gameAreaMain.stop();
  gameAreaMain.vueComponent.$store.commit(
    "setCurrentSave",
    JSON.stringify(gameAreaMain, gameAreaMain.jsonStringifyReplacer)
  );
  gameAreaMain = null;
}
