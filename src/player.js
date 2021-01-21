class Player {
    constructor(col, row) {
        this.x = row;
        this.y = col;
    }
    moveUp() {
        this.row -= 1;
    }
    moveDown() {
        this.row += 1;
    }
    moveLeft() {
        this.col -= 1;
    }
    moveRight() {
        this.col += 1;
    }

    preload () {
        this.image = loadImage('assets/character-down.png');
    }

    draw() {
        // image(this.image, this.row, this.col, 100, 100)
    }
    
}