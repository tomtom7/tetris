import Renderer from "./modules/renderer"
import MoveHandler from "./modules/movehandler"
import Shape from "./modules/shape"

class Game {
    constructor(options) {
        this.options = options;
        this.blocks = [];
        this.currentShape = new Shape(this.options.scale);
        this.renderer = new Renderer(this);
        this.moveHandler = new MoveHandler(this)
    }

    main() {
        this.currentTime = new Date().getTime();

        if (this.currentTime - this.lastTime > (1000 / this.options.fps) ){
            this.renderer.render();
            this.update();
            this.lastTime = this.currentTime;
        }
        
        requestAnimationFrame(() => this.main());
    }

    update() {
        this.moveHandler.tickDown();
        this.moveHandler.checkMovement();
    }

    resetFps() {
        this.options.fps = this.options.defaultFps;
    }

    lockShape() {
        this.currentShape.blocks.forEach((block) => this.blocks.push(block));
        this.currentShape = new Shape(this.options.scale);

        if (!this.moveHandler.canMoveDown()) {
            //game over
             this.blocks = [];
        }
    }

    start() {
        this.lastTime = new Date().getTime();
        this.main();
    }
}

let options = {
    defaultFps: 1,
    fps: 1,
    scale: 30
}

let game = new Game(options);
game.start();
