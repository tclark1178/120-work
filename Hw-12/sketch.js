let balls = [];
const numOfBalls = 900;

function setup() {
    createCanvas(windowWidth, windowHeight);
//create a drop down effect of a busy hollday rush by making
//init_x += 10 to make the drop down
    let init_x = 6;
    let init_y = 6;
    for ( let i = 1; i < numOfBalls; i++ ) {
        balls.push( new Ball( init_x, init_y ) );
        init_x += 10;
        if( init_x > width ) {
            init_x = 60;
            init_y += 10;
        }
    }
}

function draw() {
    background( '255' );
//make backgrounf white to see colors
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].edgeCheck();
        balls[i].display();
    }
}
//creat the ball class
class Ball {
    constructor(x, y, size) {
        this.color1 = 'red';
        this.color2 = 'green';
        this.color3 = 'gold';
        this.size = random(-10, 20);
        this.rad = this.size / 1;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(10, -10);
        this.deltaY = random(-10, 10);
    }
//will have three types of colored balls for Christmas
    display() {
        push();
        noStroke();
        fill(this.color1);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        noStroke();
        fill(this.color2);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        noStroke();
        fill(this.color3);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'gold';
        }
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'green';
        }
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
                this.deltaX *= -1;
                this.color = 'red';
              }

        }
    }
