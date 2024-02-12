function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  strokeWeight(1);
  drawingContext.setLineDash([5, 15]);
  line(200, 0, 200, 400)
  fill("black")
  rect(130, 170, 140, 60)
  fill("white")
  textSize(55)
  if (mouseX < 200){
      text('Left', 150, 220);
  }
  else{
    textSize(50)
    text('Right', 140, 215);
  }
}
