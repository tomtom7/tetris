import Renderer from "./modules/renderer"
import MoveHandler from "./modules/movehandler"

class Game {
    constructor(options) {
        this.renderer = new Renderer(options);
        this.moveHandler = new MoveHandler(this.renderer);
    }

    main() {
        this.currentTime = new Date().getTime();

        if (this.currentTime - this.lastTime > (1000 / this.renderer.grid.options.fps) ){
            this.renderer.render();
            this.update();
            this.lastTime = this.currentTime;
        }
        
        requestAnimationFrame(() => this.main());
    }

    update() {
        this.moveHandler.tickDown();
    }

    start() {
        this.lastTime = new Date().getTime();
        this.main();
    }
}

let options = {
    defaultFps: 1,
    fps: 1,
    maxFps: 30,
    scale: 30,
    scoreMultiplier: 100,
    speed: 15
}

let game = new Game(options);
game.start();
