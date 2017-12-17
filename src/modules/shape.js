import Shapes from './shapes'

const shapes = [Shapes.O, Shapes.I, Shapes.T, Shapes.L, Shapes.J, Shapes.S, Shapes.Z];

class Shape {

	constructor(scale) {
		this.scale = scale;
		Object.assign(this, this.randomShape());
	}

	randomShape() {
		let index = Math.floor(Math.random() * shapes.length);
		return shapes[index](this.scale);
	}

	canMove(direction, gridBlocks) {
		return this.blocks.every(b => b['canMove' + direction](gridBlocks)); 
	}

	move(direction) {
		this.blocks.forEach(b => b['move' + direction]());
	}

	canRotate(gridBlocks) {
		return this.type != 'O' && this.blocks.every(b => b.canRotate(gridBlocks));
	}

	rotate() {
		this.blocks.forEach(b => b.rotate());
	}

}


export default Shape;
