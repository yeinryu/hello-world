function setup() {
  createCanvas(360, 360);
}

function draw() {
  background(220);
  noStroke()
  colorMode(HSB);
  let left_color = mouseX
  fill(h=left_color, s=100, b=100)
  let rect_left = rect(0,0,180,360)
  if (left_color <= 180)
  {
    let complementary = left_color+180
    let right_color = abs(complementary)
      fill(h=right_color, s=100, b=100)


  }
  else
    {
     let complementary = left_color-180
    let right_color = abs(complementary)
      fill(h=right_color, s=100, b=100)
    }
  let rect_right = rect(180,0,180,360)
  strokeWeight(3)
  textSize(20)
  stroke("white")
  fill("black")
  text('Move left to right to change color!', 35, 50)

  
}
