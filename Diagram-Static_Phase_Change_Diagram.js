function setup() {
  createCanvas(550, 500);
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdUtmelTYt6-4bw3C0l2X1sN4vk0Q7B-IftNltwB1o3CNBBLFJ5T1JKTv84C4hF2UtNE&usqp=CAU')
}

function draw() {
  background(220);
 //image(img, 0, 0, img.width * 2, img.height * 2);
  
  //Gas image
  noStroke()
  fill("gray")
  circle(145, 65, 85);
  circle(105, 70, 75);
  circle(75, 90, 83);
  circle(115, 90, 85);
  circle(155, 100, 80);
  circle(190, 85, 75);
  
  
  
  //Solid image
  stroke("black");
  strokeWeight(1);
  fill("white");
  rect(30, 340, 100, 100);
  fill("gray")
  quad(130, 340, 170, 300, 170, 400, 130, 440);
  fill("black")
  quad(70,300, 170, 300, 130, 340, 30, 340)
  
  //Liquid image
  stroke("black")
  noFill();
  //fill("white");
  strokeWeight(1);
  ellipse(397, 205, 110, 30);
  ellipse(397, 240, 98, 30);
  ellipse(397, 320, 75, 30);
  line(342, 205, 360, 320)
  line(452, 205, 434.5, 320);
  
  //arrow
  strokeWeight(4)
  //sublimation
  line(50, 150, 50, 280);
  line(50, 150, 30, 180);
  line(50,150, 70, 180);
  //Deposition
  line(120, 150, 120, 280);
  line(120, 280, 100, 250);
  line(120, 280, 140, 250);
  //Condensation
  line(210, 140, 330, 230);
  line(330, 230, 310, 190);
  line(330, 230, 285, 220);
  //Vaporization
  line(260, 90, 370, 170);
  line(260, 90, 300, 95);
  line(260, 90, 275, 130);
  //Fusion
  line(200, 340, 320, 280);
  line(320, 280, 280, 275);
  line(320, 280, 300, 320);
  //Freezing
  line(200, 430, 360, 350);
  line(200, 430, 225, 400);
  line(200, 430, 235, 430);
  
  //Enthaply of System
  line(500, 100, 500, 450);
  fill("black");
  triangle(500, 90, 495, 100, 505, 100)
  
  strokeWeight(2);
  fill("white");
  rect(20, 370, 120, 40);
  rect(335, 260, 120, 40);
  rect(70, 65, 120, 40);
  textSize(30)
  fill("black")
  text("Gas", 100, 95);
  text("Liquid", 355, 290);
  text("Solid", 45, 400);
  
  textSize(30);
  text("Phase Change Diagram", 130, 480);
  textSize(15);
  strokeWeight(0.5);
  let angel1 = radians(35);
  rotate(angel1);
  text("Vaporization", 310, -85);
  let angel2 = radians(3);
  rotate(angel2);
  text("Condensation", 265, -30);
  let angel3 = radians(50);
  rotate(angel3);
  text("Sublimation", 200, -50)
  let angel4 = radians(0);
  rotate(angel4);
  text("Deposition", 170, -125);
  text("Enthaply of System", 230, -500);
  let angel5 = radians(-115);
  rotate(angel5);  
  text("Fusion", 55, 365);
  text("(Melting)", 50, 385);
  text("Freezing", 50, 465);
  


  
}
