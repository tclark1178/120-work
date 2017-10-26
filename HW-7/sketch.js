

var ball = {};
ball.width = 8;
ball.x = 7;
ball.y = 7;
//by changing the x and y speed from 1 to 8 you get a diffirent pattern.
//the ball changes its course by mixing up its speed.
ball.delta_x = 8;
ball.delta_y = 1;
ball.scale_x = 8;
ball.scale_y = 1;


function setup() {
    createCanvas(windowWidth, 800);
    //changed the canvas for bigger size
    //change background to blue
    background("blue");
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 1) {
        ball.delta_x = -1 * ball.delta_x;

    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill('red');
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
