function setup() {
  createCanvas(550, 700);
  // img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdUtmelTYt6-4bw3C0l2X1sN4vk0Q7B-IftNltwB1o3CNBBLFJ5T1JKTv84C4hF2UtNE&usqp=CAU')
}

function draw() {
  background(220);
  //image(img, 0, 0, img.width * 2, img.height * 2);

  
  //Gas image
  noStroke();
  fill("gray");
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
  fill("gray");
  quad(130, 340, 170, 300, 170, 400, 130, 440);
  fill("black");
  quad(70, 300, 170, 300, 130, 340, 30, 340);

  //Liquid image
  stroke("black");
  noFill();
  //fill("white");
  strokeWeight(1);
  ellipse(397, 205, 110, 30);
  ellipse(397, 240, 98, 30);
  ellipse(397, 320, 75, 30);
  line(342, 205, 360, 320);
  line(452, 205, 434.5, 320);

  //arrow
  strokeWeight(4);
  //sublimation
  line(50, 150, 50, 280);
  line(50, 150, 30, 180);
  line(50, 150, 70, 180);
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
  triangle(500, 90, 495, 100, 505, 100);

  strokeWeight(2);
  fill("white");
  rect(20, 370, 120, 40);
  rect(335, 260, 120, 40);
  rect(70, 65, 120, 40);
  textSize(30);
  fill("black");
  text("Gas", 100, 95);
  text("Liquid", 355, 290);
  text("Solid", 45, 400);

  textSize(30);
  text("Phase Change Diagram", 130, 480);
  textSize(15);
  strokeWeight(0.5);
  angleMode(DEGREES);
  textSize(15);
  strokeWeight(0.5);
  rotate(35);
  text("Vaporization", 320, -85);
  text("Condensation", 260, -10);
  //rotate(-35)
  rotate(55);
  text("Sublimation", 190, -60);
  text("Desposition", 160, -130);
  text("Enthaply of System", 190, -510);
  //rotate(30)
  rotate(-120);
  text("Melting", 25, 390);
  text("Freezing", 35, 470);
  rotate(390);
  textSize(20);
  text("Type F to see freezing phase", 150, 520);
  text("Type M to see melting phase", 150, 550);
  text("Type D to see desposition phase", 150, 580);
  text("Type S to see sublimation phase", 150, 610);
  text("Type V to see vaporization phase", 150, 640);
  text("Type C to see condensation phase", 150, 670);
  
  if (keyIsPressed) {
  if (key == 'F') {
    gas_image_block();
    desposition_block();
    sublimation_block();
    condensation_block();
    vaporization_block();
    melting_block();}
    else if (key == 'M'){
    gas_image_block();
    desposition_block();
    sublimation_block();
    condensation_block();
    vaporization_block();
    freezing_block();
  }
    else if (key == 'D'){
    liquid_image_block();
    sublimation_block();
    condensation_block();
    vaporization_block();
    freezing_block();
    melting_block();
    }
    else if (key == 'S'){
    liquid_image_block();
    desposition_block();
    condensation_block();
    vaporization_block();
    freezing_block();
    melting_block();
    }
    else if (key == 'V'){
    solid_image_block();
    desposition_block();
    condensation_block();
    sublimation_block();
    freezing_block();
    melting_block();
    }
    else if (key == 'C'){
    solid_image_block();
    desposition_block();
    vaporization_block();
    sublimation_block();
    freezing_block();
    melting_block();  
    }
  
  }
}

function gas_image_block(){
  noStroke()
  fill(220)
  ellipse(129, 81, 205,133)
}
  
function liquid_image_block(){
  noStroke()
  fill(220)
  quad(330, 180, 480, 180, 470, 350, 350, 330)
  rect(330, 250, 60)
}
function solid_image_block(){
  noStroke()
  fill(220)
  quad(10, 290, 175, 290, 175, 420, 10, 500)
}
  
function sublimation_block(){
  noStroke()
  fill(220)
  rect(10, 140, 75, 150)
}
  
function desposition_block(){
  noStroke()
  fill(220)  
  rect(90, 140, 75, 150)
}
 
function vaporization_block(){
  noStroke()
  fill(220)
  quad(250, 65, 400, 140, 380, 185, 230, 110 )
}
  
function condensation_block(){
  noStroke()
  fill(220)
  quad(220, 110, 340, 210, 300, 255, 200, 140 )
  rect(300, 200, 40)
}

function melting_block(){
  noStroke()
  fill(220)
  quad(180, 320,330, 245, 330, 320, 200, 360)
}
  
function freezing_block(){
  noStroke()
  fill(220)
  quad(180, 400,360, 330, 370, 350, 200, 455)
}

