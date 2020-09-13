class GameArea {    
    constructor(canvas, width, height, gameTickAction) {
        if (typeof(canvas) === "object") {
            this.canvas = canvas;   
        }
        else {
            this.canvas = document.createElement("canvas");
            this.canvas.width = width;
            this.canvas.height = height;
        }
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(gameTickAction, 20);
        window.addEventListener("keydown", function (e) {
            e.preventDefault();
            gameAreaMain.keys = (gameAreaMain.keys || []);
            gameAreaMain.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener("keyup", function (e) {
            gameAreaMain.keys[e.keyCode] = (e.type == "keydown");
        });
    }

    stop() {
        clearInterval(this.interval);
    }
    
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
