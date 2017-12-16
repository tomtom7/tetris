let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

class Renderer {

	constructor(game) {
		this.game = game;
	}

	_clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	_drawGrid(step) {
	    ctx.beginPath();
	    ctx.lineWidth = 0.15;
	    ctx.strokeStyle = '#000000';
	    for (let x = 0; x <= canvas.width; x += step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
	    }

	    ctx.stroke(); 

	    ctx.beginPath();
	    for (let y = 0; y <= canvas.height; y += step) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
	    }
	    ctx.stroke(); 
	}

	_renderBlock(block) {
		ctx.beginPath();
		ctx.rect(block.x, block.y, block.scale, block.scale);
		ctx.fillStyle = block.color;
		ctx.fill();

		ctx.strokeStyle = "#FFFFFF";
		ctx.lineWidth = 1;
		ctx.stroke();
		ctx.closePath();
	}

	_renderBlocks(blocks) {
		ctx.save();
		blocks.forEach((block) => {
			this._renderBlock(block);
		});
		ctx.restore();
	}

	render() {
		this._clearCanvas();
		this._drawGrid(this.game.options.scale);
		this._renderBlocks(this.game.blocks);
		this._renderBlocks(this.game.currentShape.blocks);
	}
}

export default Renderer