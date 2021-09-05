exports.toDrawData = function () {
  return {
    componentMapPlayer: Array.from(this.componentMapPlayer).map(function ([
      key,
      value,
    ]) {
      return { id: key, drawData: value.toDrawData() };
    }),
    componentArrayEnemy: this.componentArrayEnemy.map(function (enemy) {
      return enemy.toDrawData();
    }),
  };
};
