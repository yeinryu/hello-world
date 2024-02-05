function setup() {
  createCanvas(400, 400);
}

function draw() {
  //board
  background("black");
  fill("white");
  noStroke();
  for (let x = 0; x <= 400; x += 100) {
    for (let y = 0; y <= 400; y += 100) {
      rect(x, y, 50, 50);
    }
  }
   for (let x = 50; x <= 400; x += 100) {
    for (let y = 50; y <= 400; y += 100) {
      rect(x, y, 50, 50);
    }
    
  }
  
  stroke("black");
  //top checkers
  fill("green");
  for (let x = 25; x <= 400; x += 50) {
    for (let y = 25; y <= 80; y += 50) {
      circle(x, y, 40);
    }
  }
  //bottom checkers
  fill("red");
  for (let x = 25; x <= 400; x += 50) {
    for (let y = 325; y <= 400; y += 50) {
      circle(x, y, 40);
    }
  }
}
