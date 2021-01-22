class Game {
  constructor () {
    this.player = new Player(0, 0);
  }
  drawGrid() {
    clear();
//     Iteration 1
//     Draw the grid
//     https://p5js.org/reference/#/p5/line

//horizontal lines only change its Ys and vertical only its Xs
//try to make them variables and increment them by 100 to save code space

//horizontal lines
  line(0, 100, 1000, 100);
  line(0, 200, 1000, 200);
  line(0, 300, 1000, 300);
  line(0, 400, 1000, 400);
  line(0, 500, 1000, 500);
  line(0, 600, 1000, 600);
  line(0, 700, 1000, 700);
  line(0, 800, 1000, 800);
  line(0, 900, 1000, 900);

//vertical lines
  line(100, 0, 100, 1000);
  line(200, 0, 200, 1000);
  line(300, 0, 300, 1000);
  line(400, 0, 400, 1000);
  line(500, 0, 500, 1000);
  line(600, 0, 600, 1000);
  line(700, 0, 700, 1000);
  line(800, 0, 800, 1000);
  line(900, 0, 900, 1000);
  
  strokeWeight(4);
  stroke(150);
  }
}

class Player {
  constructor(x, y) {
      this.row = x;
      this.col = y;
      this.img;
  }
  moveUp() {
      this.row -= SQUARE_SIDE;
  }
  moveDown() {
      this.row += SQUARE_SIDE;
  }   
  moveLeft() {
      this.col -= SQUARE_SIDE;
  }
  moveRight() {
      this.col += SQUARE_SIDE;
  }
  preloadPlayer(){
      console.log('preload is called');
      this.img = loadImage('.././assets/character-down.png');
  }
  drawPlayer(){
      image(this.img, this.col, this.row, 100, 100);
  }
  
}