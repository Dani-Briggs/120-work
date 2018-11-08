// setting varables
let bee = [];
let num_of_bees = 35;
let bg_color;
let x = 20;
let y = 50;

//setup
function setup(){
  createCanvas(windowWidth, 300);
  bg_color = color(45, 255, 163);

  for (let i = 0; i < num_of_bees; i++) {
        let b = new BuzzBee(20,50);
          bee.push(b);
    }

}

function draw(){
  background(bg_color);

  for (let i = 0; i < bee.length; i++) {
        bee[i].frame();
        bee[i].move();
        bee[i].display();

  }
}





//creating the class
class BuzzBee {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size_h = (20, 50);
    this.size_w = (20, 50);
    this.loc_x = random(width);
    this.loc_y = random(height);
    this.body_color = color(235, 180, 5);
    this.eye_x = this.size_h * 0.23 * -1;
    this.eye_y = this.size_w * 0.15;
    this.eye_size = this.size_w * 0.25;
    this.ant_x = this.eye_x * -1.5;
    this.ant_y = this.eye_y * -2.5;
    this.ant_size = this.eye_size * 0.5;
    this.feet_x = this.size_w * 0.25;
    this.feet_y = this.size_h * 0.5;
    this.feet_w = this.size_w * 0.5;
    this.feet_h = this.size_h * 0.4;
    this.left_foot_angle = 0;
    this.right_foot_angle = 0;
  }


frame(){
      this.display();
      this.move();
    }


display(){

  push();

//body
  translate(this.loc_x, this.loc_y);
  fill(this.body_color);

  ellipse(0, 0, this.size_w, this.size_h);

//eye
  fill(255);
  ellipse(-this.eye_x, this.eye_y, this.eye_size, this.eye_size);
  ellipse(this.eye_x, this.eye_y, this.eye_size, this.eye_size);

//anntena
fill(5);
ellipse(-this.ant_x, this.ant_y, this.ant_size, this.ant_size);
ellipse(this.ant_x, this.ant_y, this.ant_size, this.ant_size);

//feet
  push();
  rotate(PI * (this.right_foot_angle * 0.01));
  translate(this.feet_x, this.feet_y);
  scale(1,-1);
  arc(0, 0, this.feet_w, this.feet_h, 0, PI, CHORD);
  pop();

  push();
  rotate(PI * -(this.left_foot_angle * 0.01));
  translate(-this.feet_x, this.feet_y);
  scale(1,-1);
  arc(0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD);
  pop();

  pop();
}


move(){
  this.loc_x = (this.loc_x + random(-5,5));
  this.loc_y = (this.loc_y + random(-5,5));
}

}
