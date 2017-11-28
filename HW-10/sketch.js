//assign my var as yarry
var yarry = [];


function setup() {
  //make the canvas
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 20; i++) {
    yarry.push(random(height));
  }
  frameRate(60);
}

function draw() {

  background('purple');
  for (var i = 0; i < yarry.length; i++) {

ranRect(random(TWO_PI), width/yarry.length*i, yarry[i]);
  }
  

}



function ranRect(ang,x, y) {
  push();
  translate( x, y );
  rotate(ang);
  rect(0,0, 30, 20);
  pop();

}
