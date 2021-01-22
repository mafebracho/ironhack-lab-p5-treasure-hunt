const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

}

function preload () {
  game.player.preloadPlayer();
}

function draw() {
  console.log('draw is called');
  game.drawGrid();
  game.player.drawPlayer();
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 38) {
      game.player.moveUp();
  }
  if (keyCode === 40) {
      game.player.moveDown();
  }
  if (keyCode === 37) {
      game.player.moveLeft();
  }
  if (keyCode === 39) {
      game.player.moveRight();
  }
}



