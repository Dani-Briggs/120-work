//Redo of HW-5
//creating a new character

//creating the array
let bodyArray = [0, 120];


//creating the functions
//green eye function
function eye( transNum, col_x, col_y, col_z ) {
  push();

  //white of eyes
  strokeWeight(4);
  fill(255);
  //move to center of body
  translate( bodyArray[1] * transNum, bodyArray[1] * transNum );
  ellipse( 0, 0, bodyArray[1] * 0.33, bodyArray[1] * 0.33 );

  //iris
  strokeWeight(2);
  fill( col_x, col_y, col_z );
  ellipse( 0, 0, 20 );
  //pupul
  fill(0);
  ellipse( 0, 0, 8 );

  pop();


}
//creating a body function
function body(col_x, col_y, col_z) {

  strokeWeight(8);
  fill( col_x, col_y, col_z);
  rotate( radians( bodyArray[0] ));
  ellipse( 0, 0, bodyArray[1], bodyArray[1] );



}

//seting it up
function setup() {
createCanvas( windowWidth, 500 );

}


//creating the draw function
function draw() {
background( 'pink' );
//no cursor on screen
noCursor();

//The Updating Values
//the body rotation rate
bodyArray[0] = ( mouseY * 0.2 ) - 5;
// body angle to equal itself plus rotation rate
bodyArray[0] = bodyArray[0] + bodyArray[0];



//***
// character sandbox
//***
push();

// character follows mouse
translate( mouseX, mouseY );

//***
//BODY
//***
push();

body(255,116,28);


//***
//RIGHT EYE
//***
push();

eye(-0.2, 45, 255, 164);

pop();

push();
//***
//NOSE
//***
fill(0);
ellipse( 0, 0, 8 );

pop();

//***
//left EYE
//***
push();

eye(0.2, 45, 255, 164);

pop();



//***
//MOUTH
//***
push();

strokeWeight(5);
fill(0);
translate( 11 , 0);
rotate(10);
line( 0, 0, 15, 0 );

pop();


pop(); // end of body


pop(); //End of character
}
