const LEFT = 'Left';
const RIGHT = 'Right';
const DOWN = 'Down';

class MoveHandler {
	constructor(game) {
		this.game = game;
		this.keys = [];
		document.addEventListener("keyup", (e) => this._removeKey(e)); 
		document.addEventListener("keydown", (e) => this._saveKey(e));
	}

	_isTop() {
	    return this.keys[87] || this.keys[38];
	}

	_isDown() {
	    return this.keys[83] || this.keys[40];
	}

	_isLeft() {
	    return this.keys[65] || this.keys[37];
	}

	_isRight() {
	    return this.keys[68] || this.keys[39];
	}

	_saveKey(e) {
		this.keys[e.keyCode] = true;
		this.checkMovement();
	}

	_removeKey(e) {
		if (this._isDown()) {
			this.game.resetFps();
		}
		this.keys[e.keyCode] = false;
	}

	_checkLeftMovement() {
		if (this._isLeft() && this.game.currentShape.canMove(LEFT, this.game.blocks)) {
            this.game.currentShape.move(LEFT);
        } 
	}

	_checkRightMovement() {
        if (this._isRight() && this.game.currentShape.canMove(RIGHT, this.game.blocks)) {
            this.game.currentShape.move(RIGHT);
        }
	}

	_checkRotation() {
        if (this._isTop() && this.game.currentShape.canRotate(this.game.blocks)) {
            this.game.currentShape.rotate();
        }
	}

	_checkDownMovement() {
		if (this._isDown()) {
			this.game.options.fps = 30;
			this.tickDown();
        }
	}

	tickDown() {
		if (this.canMoveDown()) {
	        this.game.currentShape.move(DOWN);
        } else {
        	this.game.lockShape();
        }
	}

	canMoveDown() {
		return this.game.currentShape.canMove(DOWN, this.game.blocks)
	}

	checkMovement() {
		this._checkRotation();
		this._checkLeftMovement();
		this._checkRightMovement();
		this._checkDownMovement();
		this.game.renderer.render();
    }
}

export default MoveHandler
