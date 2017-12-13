let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

class Renderer {
	static _clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	static render(game) {
		this._clearCanvas();

        ctx.beginPath();
        ctx.fillRect(game.x, game.y, 10, 10);
        ctx.fillStyle = "#0095DD";
        ctx.stroke();
	}
}
export default Renderer