

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  const game = new Game();
  const player = new Player(0,0);

  game.drawGrid();
  
  player.preload();
  player.draw();
}


