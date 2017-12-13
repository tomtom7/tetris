import Renderer from "./modules/renderer"

let canvas = document.getElementById("game");

class Game {
    constructor() {
        this.speed = 100;
        this.y = 0;
        this.x = 100;
    }

    main() {
        let now = Date.now();
        this.dt = (now - this.lastTime) / 1000.0;

        this.update();
        this.render();

        this.lastTime = now;
        requestAnimationFrame(() => this.main());
    }

    update() {
        this.y += this.speed * this.dt;

        if (this.y >= canvas.height) {
            this.y = 0;
        }
    }

    render() {
        Renderer.render(this);
    }

    start() {
        this.lastTime = Date.now();
        this.main();
    }
}

let game = new Game();
game.start();
