
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
}










// background('red');

// createCanvas(700,700);


  // set background color


  // background('red');

 // push();
  // translate(100,50);

  // noFill();
  // stroke(3);
  // ellipse(0,0,60);
// pop();


// creating the sandbox
 // push();
//moveing the character to the center of the canvas

  // translate(200, 350);
  //now for body
  // push();
  //the body of my black skeleton
  // rect( 15,4,95,205 );
  //end body
  // pop();



   //now for the arms of the skeleton
  //  push();
   //the frist arm
  // translate(100, 15);
  // rotate( radians(-10) );
// rect(0,0,200,13);
//end arm
 // pop();

 //now for the second arm
 // push();
 // translate(20,15);
 // rotate( radians(-140) );
 // rect(0,0,200,13);


// ellipse(200,8,25);
 // ellipse(0,0,30);
 // pop();
 // now for the head and face of the skeleton
 // push();
 // translate();
 // ellipse(65,-40,95,95);
 // pop();

 //now for the face
 // push();
 // translate();
 // fill('white');
  // triangle(60,60,60,95,95,60);

 // pop();









// }
