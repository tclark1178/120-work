//create 3 var
let ball; //will be red
let ball2; //will be blue
let ball3; //will be white
function setup() {
    createCanvas(windowWidth, windowHeight);
//change the ball object with + height
    ball = new XXYZ(width / 6, height / 6, 65, 'red');
    ball2 = new XXYZ(width / 4, height / 4, 55, 'blue');
    ball3 = new XXYZ(width / 2, height / 2, 22, 'white');
}
//createCanvas black to see the white ball3
function draw() {
    background(0);

    ball.display();
    ball2.display();
    ball3.display();
    ball.move('40');
    ball2.move('40');
    ball3.move('40');
    ball.edgeCheck();
    ball2.edgeCheck();
    ball3.edgeCheck();
}

class XXYZ {
    constructor(x, y, size, color) {
        this.color = color;
        this.size = size;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-20, 50);
        this.deltaY = random(-20, 50);
        //change the speed of the ball with x = -20, 50 and y = -20, 50
    }

    display() {
        push();
        noStroke();
        fill(this.color);
        translate(this.posX, this.posY);
        ellipse(4, 4, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }
}
