function setup() {
  createCanvas(400, 700);
  noFill();
  stroke(0);
  strokeWeight(2);
  noLoop();
}

function draw() {
  background("white");
  size = 30;
  angle = 0;
  
  for (let y = size; y < 700 - size; y += size) {
    for (let x = size; x < 400 - size; x += size) {
      push();
      translate(x + size / 2, y + size / 2);
      rotateAmount = random(-angle, angle);
      rotate(rotateAmount);
      square(-size / 2, -size / 2, size);
      pop();
    }
    angle += 0.05;
  }
}

