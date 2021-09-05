import { stop } from "./stop";
import { clear } from "./clear";

class GameArea {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.frameNo = 0;
    this.interval = setInterval(this.gameTickAction, 20, this);
    this.downKeys = {};

    var self = this;
    window.addEventListener("keydown", (e) => {
      //e.preventDefault();
      self.downKeys[e.key] = true;
    });
    window.addEventListener("keyup", (e) => {
      //e.preventDefault();
      self.downKeys[e.key] = false;
    });
  }

  gameTickAction() {}
}

GameArea.prototype.stop = stop;
GameArea.prototype.clear = clear;

export { GameArea };
