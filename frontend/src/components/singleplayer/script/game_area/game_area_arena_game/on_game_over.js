export function onGameOver() {
  this.setInformationText("Game Over");
  this.vueComponent.$bvModal.show("gameOverModal");
  this.vueComponent.$store.commit("setCurrentSave", null);
  this.stop();
}
