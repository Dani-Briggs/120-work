//Defining the varables

var pos_x;
var pos_y;

var circle_min = 20;
var circle_max;

//setup
function setup(){

  createCanvas(windowWidth, 500);
  background(0);
  frameRate(10);

  pos_x = width * 0.5;
  pos_y = height * 0.5;

  circle_max = height - 40;


}

//draw
function draw(){

  noCursor();
  //size and stroke color random
  //var size = random( height-40, 20);
  var color = floor( random(256) );
  var circle_size = map(mouseX, 0, width, circle_min, circle_max)

  //colors for circle fill
  var cirRed = floor( random(256));
  var cirBlue = floor( random (256));
  var cirGreen = floor( random(256));

  //Constrain function
  var leftWall = 25;
  var rightWall = width - 25;
  var xc = constrain(mouseX, leftWall, rightWall);
  //walls
  stroke(255);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);


  //circle
  fill(cirRed,cirBlue,cirGreen);
  stroke(color,color,color);
  strokeWeight(10);
  ellipse( xc, mouseY, circle_size);



}
