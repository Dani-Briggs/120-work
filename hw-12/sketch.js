//setting up the varables

let balls = [];
let num_of_balls = 2;


//setup
function setup(){
    createCanvas(windowWidth, 600);

    let init_x = 50;
    let init_y = 50;
    for (let i = 0; i < num_of_balls; i++){
      balls.push(new Ball(init_x, init_y));

      init_x += 100;
      if (init_x > width){
        init_x = 50;
        init_y += 150;
      }
    }


}


//draw
function draw(){
  background('rgb(166, 32, 66)');

  for (let i = 0; i < balls.length; i++){
    balls[i].ballCheck(balls, i);
    balls[i].wallCheck();
    balls[i].move();
    balls[i].display();
    balls[i].mouseCheck();
  }


}

function mousePressed() {
  for(let i = balls.length - 1; i >= 0; i--){
    let comeTogether = balls[i].mouseCheck();
    if (comeTogether){
      balls[i].move(mouseX, mouseY);

    }

      }
    }



///////
// creating the class
//////

class Ball {
  constructor(x, y, size){
    this.color_one = 'blue';
    this.color_two = 'yellow';
    this.size = (20, 50);
    this.rad = this.size / 2;
    this.posX = x;
    this.posY = y;
    this.deltaX = random(-5,5);
    this.deltaY = random(-5,5);
  }

  display(){
    push();

    stroke(0);
    strokeWeight(5);
    fill(this.color_one);
    translate(this.posX, this.posY);
    ellipse(0, 0, this.size);

    pop();

    push();

    stroke(0);
    strokeWeight(5);
    fill(this.color_two);
    translate((this.posX + width) * 0.5, (this.posY + height) * 0.5);
    ellipse(0, 0, this.size);

    pop();

  }

  move(){
    this.posY += this.deltaY
    this.posX += this.deltaX
  }

  wallCheck(){
    if (this.posX + this.rad >= width || this.posX + this.rad <= 0){
      this.deltaX *= -1;
    }
    if (this.posX + this.rad >= height || this.posY + this.rad <= 0){
      this.deltaY *= -1;
    }
}
  ballCheck(otherBall, myVar){
    for (let n = 0; n < otherBall.length; n++){
           if (myVar !== n){
           let other = otherBall[n];
           let d = dist(this.posX, this.posY, other.posX, other.posY);
           let combR = this.rad + other.rad;

               if (d <= combR){
                   this.deltaX *= -1;
                   this.deltaY *= -1;

                   if (this.color_one == 'rgb(17, 30, 108)'){
                     this.color_two = 'rgb(245, 245, 0)';
                   }else {
                     this.color_one = 'rgb(124, 252, 0)';
                     this.color_two = this.color_one;

                     }
                   }

               }
           }
       }

  mouseCheck(){

    let d = dist(this.posX, this.posY, mouseX, mouseY);
    if (d > this.rad) {
      return true;
    }else {
        return false;
      }
    }

}
