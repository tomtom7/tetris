import Block from "./block"

class Shapes {
	static I(scale) {
		let color = 'maroon';
		return {
			type: 'I',
			color: color,
			blocks: [
				new Block(0, 0, color, scale, -2, 0), 
				new Block(1, 0, color, scale, -1, 0), 
				new Block(2, 0, color, scale, 0, 0), 
				new Block(3, 0, color, scale, 1, 0)
			]
		}
	}

	static O(scale) {
		let color = 'gray';
		return {
			type: 'O',
			color: color,
			blocks: [
				new Block(0, 0, color, scale, -1, -1), 
				new Block(1, 0, color, scale, 0, -1), 
				new Block(0, 1, color, scale, -1, 0), 
				new Block(1, 1, color, scale, 0, 0)
			]
		}
	}

	static T(scale) {
		let color = 'purple';
		return {
			type: 'T',
			color: color,
			blocks: [
				new Block(1, 0, color, scale, 0, -1), 
				new Block(0, 1, color, scale, -1, 0), 
				new Block(1, 1, color, scale, 0, 0), 
				new Block(2, 1, color, scale, 1, 0)
			]
		}
	}

	static L(scale) {
		let color = 'orange';
		return {
			type: 'L',
			color: color,
			blocks: [
				new Block(0, 1, color, scale, -1, 0), 
				new Block(1, 1, color, scale, 0, 0), 
				new Block(2, 1, color, scale, 1, 0), 
				new Block(2, 0, color, scale, 1, -1)
			]
		}
	}

	static J(scale) {
		let color = 'blue';
		return {
			type: 'J',
			color: color,
			blocks: [
				new Block(0, 0, color, scale, -1, -1), 
				new Block(0, 1, color, scale, -1, 0), 
				new Block(1, 1, color, scale, 0, 0), 
				new Block(2, 1, color, scale, 1, 0)
			]
		}
	}

	static S(scale) {
		let color = 'green';
		return {
			type: 'S',
			color: color,
			blocks: [
				new Block(0, 1, color, scale, -1, 1), 
				new Block(1, 1, color, scale, 0, 1), 
				new Block(1, 0, color, scale, 0, 0), 
				new Block(2, 0, color, scale, 1, 0)
			]
		}
	}

	static Z(scale) {
		let color = 'red';
		return {
			type: 'Z',
			color: color,
			blocks: [
				new Block(0, 0, color, scale, -1, 0), 
				new Block(1, 0, color, scale, 0, 0), 
				new Block(1, 1, color, scale, 0, 1), 
				new Block(2, 1, color, scale, 1, 1)
			]
		}
	}
}

export default Shapes