function setup() {
  createCanvas(330,550);
  img = loadImage('https://www.slam.org/wp-content/uploads/piction/image-cache/7027-eiffel-tower.jpg');
}

function draw() {
  background(220);
  noStroke();
  noFill();
  image(img,0, 0, img.width / 3, img.height / 3);
  //background 
  
  fill("green");
  circle(0, 50, 580);
  fill("orange");
  circle(0, 110, 360);
  //yellow trapezoid 
  fill("yellow")
  quad(230, 20, 260, 20, 250, 210, 188, 235);
  //front bottom trapezoid
  fill("orange")
  quad(192, 237, 250, 214, 270, 330, 140, 370);
  //side up trapezoid
  fill("purple")
  quad(210, 20, 228, 20, 185, 230, 160, 200)
  //side bottom trapezoid
  stroke("purple")
  strokeWeight(4)
  fill("beige")
  quad(160, 205, 190, 240, 135, 370, 100, 300);
  //front base trapezoid
  noStroke();
  fill("orange");
  quad(135, 375, 275, 335, 330, 430, 70, 530);
  //side base trapezoid
  fill("purple");
  quad(95, 300, 130, 370, 65, 525, 20, 335);
  //front base circle
  fill("red")
  circle(240, 500, 170)
  
}
