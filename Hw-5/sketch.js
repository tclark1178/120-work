//painting abstract
function setup() {
  createCanvas(windowWidth, windowHeight );
  background('255');
  frameRate( 90 );
  //frame of 90 or 80 should work.

}
 var angle = 15;


function draw() {

  //this will be the base of the abstract
  noCursor();

  //the main colors of this abstract will be red, yellow and blue.
  //this will be a homage to retro comic book art.
  push();
  fill('blue');
  stroke('yellow');
  strokeWeight(8);
  rotate( radians(angle) );
  ellipse(mouseX, mouseY, 85, 85 );
  fill('red');
  ellipse(mouseX, mouseY, 35, 35 );
  pop();
  //the idea is to have other shapes inside of each other.

  push();
  fill('blue');
  stroke('red');
  strokeWeight(5);
  rect(mouseX, mouseY, 15, 150 );
  fill('yellow');
  rect(mouseX, mouseY, 15, 60 );
  rotate(-25);
  pop();

  push();
  rotate( radians(angle) );
  fill('yellow');
  stroke('blue');
  strokeWeight(5);
  triangle( mouseX, mouseY, 90, 95, 30, 25, 50 );
  fill('red');
  triangle(mouseX, mouseY, 80, 85, 20, 15, 45 );
  pop();

  push();
  fill('red');
  stroke('yellow');
  strokeWeight(5);
  triangle( mouseX, mouseY, 100,100,100,20,20,20 );
  pop();

  
  angle = angle + 45;

}
