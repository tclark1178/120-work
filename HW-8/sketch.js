
//set my var as x = 100
var x = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //stroke will be set to 255 with a frameRate of 60
  stroke('255');
  frameRate('60');
}


function draw() {
  background('green');
  //here is my loop
  x = x - 1;
  if (x < 0) {
    x = width;
  }
  ellipse(8,3, x, width, x);
  line(0, x, width, x);
  rect(0, x, width, x);
  line(0, x, width, x);
  fill('red');
}
