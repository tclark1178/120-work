Empty p5 sketch.

function setup() {
  createCanvas(500,500);
background('red');
}
  function draw() {
    //the body of the monster

push();
fill('green');
ellipse(250,250,250,250);
pop();


push();
fill('255');
ellipse(250,230,100,100);
//for the eye of the monster
fill('black');
ellipse(250,230,30,30);
fill('255');
//now for the sharp teeth of the monster
arc( 200, 330, 90, 90, radians(260), radians(280) );
arc(300, 330, 90, 90, radians(260), radians(280) );

pop();
