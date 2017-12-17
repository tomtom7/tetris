import Shape from "./shape"

let canvas = document.getElementById("game-canvas");

class Grid {

	constructor(options) {
		this.options = options;
		this.options.rowLength = canvas.width / this.options.scale;
		this.reset();
		this._addNewShape();
	}

	_addNewShape() {
    	this.currentShape = new Shape(this.options.scale);
    }

   	_checkFullRows() {
		let groupedRows = this._groupBy('y');
        Object.keys(groupedRows).forEach(key => this._checkFullRow(groupedRows, key));

        this._setGameSpeed();
	}

    _checkFullRow(groupedRows, key) {
        if (this.options.rowLength == groupedRows[key].length) {
        	this._removeFullRows(groupedRows, key);
        } 
    }

    _removeFullRows(groupedRows, key) {
    	this.blocks = this.blocks.filter(item => !groupedRows[key].includes(item));
    	this.blocks.forEach(b => this._shiftBlock(b, key));
    	this.fullRows++;
    }

    _shiftBlock(b, y) {
        if (b.isAbove(y)) {
        	b.moveDown();
        }
    }

    _groupBy(property) {
        return this.blocks.reduce((groups, item) => this._aggregrate(groups, item, property), {});
    }

    _aggregrate(groups, item, property) {
	    let val = item[property];
		groups[val] = groups[val] || [];
		groups[val].push(item);
		return groups;
    }

    _setGameSpeed(fps) {
    	if (fps) {
    		this.options.fps = fps;
    	} else {
    		this.options.fps = 1 + Math.floor(this.fullRows / this.options.speed);
    	}
    }

	lockShape() {
        this.currentShape.blocks.forEach(block => this.blocks.push(block));
        this._addNewShape();
        this._checkFullRows();
    }

    reset() {
    	this.blocks = [];
    	this.fullRows = 0;
    	this._setGameSpeed(this.options.defaultFps);
    }
}

export default Grid;
