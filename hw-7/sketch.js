

let ball = {};
ball.width = 100;
ball.x = 5;
ball.y = 5;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    var ballRed = floor( random(256));
    var ballBlue = floor( random (256));
    var ballGreen = floor( random(256));


    stroke(ballRed, ballBlue, ballGreen);
    strokeWeight(24);
    fill(ballRed, ballBlue, ballGreen);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 20);
    ball.scale_y = map(mouseY, 0, height, 0.5, 20);
}
