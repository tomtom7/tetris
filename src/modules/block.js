let canvas = document.getElementById("game");

class Block {
	constructor(x, y, color, scale, offsetX, offsetY) {
		this.scale = scale;
        this.color = color
		this.x = (3 * this.scale) + (x * this.scale);
        this.y = y * this.scale;
        this.offsetX = offsetX * this.scale;
        this.offsetY = offsetY * this.scale;
    }

    canMoveLeft(blocks) {
    	let x = this.x - this.scale;
    	return x >= 0 && !this.gridHasBlock(blocks, {x: x, y: this.y});
    }

    canMoveRight(blocks) {
    	let x = this.x + (2 * this.scale);
    	return x <= canvas.width && !this.gridHasBlock(blocks, {x: x, y: this.y});
    }

    canMoveDown(blocks) {
    	let y = this.y + this.scale;
    	return y < canvas.height && !this.gridHasBlock(blocks, {x: this.x, y: y});
    }

    canRotate(blocks) {
        let coords = this.getRotationCoords();
        let x = coords[0];
        let y = coords[1];

        return x >= 0 && 
            x <= canvas.width && 
            y >= 0 && 
            y <= canvas.height && 
            !this.gridHasBlock(blocks, {x: x, y: y});
    }

    getRotationCoords() {
        let x = this.x - this.offsetX - this.offsetY;
        let y = this.y - this.offsetY + this.offsetX;

        return [x, y];
    }

    //subtract center piece relative position from current block position
    // [4]   [-2]     [6]
    // [2] - [0]  =>  [2]

    //calculate rotation matrix for 90 degreees rotation
    //[0 1]    [-2]    [0]
    //[-1 0] * [0] =>  [2]

    //tempX = (0 * offsetX) + (1 * offsetY) => offsetY;
    //tempY = (-1 * offsetX) + (0 * offsetY) => -offsetX;
    //which translates to:
    // x = offsetY
    // y = -offsetX
    //Add new coordinates with - sign to center piece relative position
    //  [6]   [(-) 0]     [6]
    //  [2] + [(-)-2] =>  [0] which is rotated block new position
    //set new center block relative coordinates which are rotation matrix result with - sign
    // [1]     [-1]
    // [-2] => [2]
    rotate() {
        let offsetX = this.offsetX;
        let offsetY = this.offsetY;
        
        let coords = this.getRotationCoords();
        this.x = coords[0];
        this.y = coords[1];

        this.offsetX = -offsetY;
        this.offsetY = offsetX;
    }

    gridHasBlock(blocks, block) {
    	return blocks.find((b) => b.isSameBlock(block));
    }

    moveLeft() {
    	this.x -= this.scale;
    }

    moveRight() {
    	this.x += this.scale;
    }

    moveDown() {
    	this.y += this.scale;
    }

    isSameBlock(block) {
    	return this.x == block.x && this.y == block.y;
	}
}

export default Block