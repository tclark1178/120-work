

//DISCLAMER! this is not my orginal code.
//Its from page 158 of the textbook by Lauren McCarthy called the JitterBug object.
//I have made some of my own modifications
//I'm not useing this for commerical use only education.
var bugs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(204);
  for (var i = 0; i < 33; i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    bugs[i] = new JitterBug(x, y, r);
  }
}
//JitterBug code from the book

function draw() {
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 5.5;
}

function move() {
  x += random(-speed, speed);
  y += random(-speed, speed);
}

this.move = function() {
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
};

function JitterBug(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;

  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

this.display = function () {
  rect(this.x, this.y, this.diameter, this.diameter);
  fill('255');
  stroke('3');
  fill('black');
  };

}
