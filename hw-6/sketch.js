//Defining the varables





function setup(){

  createCanvas(windowWidth, 500);
  background('teal');
  frameRate(15);
}


function draw(){

  var size = random( height-10, 20);
  var color = floor( random(256) );
  var circleMove = map(mouseX, mouseY, 0, width);
  fill('pink');

  stroke(color,color,color);
  strokeWeight(10);
  ellipse(circleMove, size);


}
