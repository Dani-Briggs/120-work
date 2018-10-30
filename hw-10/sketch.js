
//creating a new character
//seting it up
function setup() {
createCanvas( windowWidth, 500 );

}

//seting the varables
let bodyAngle = 0;
let bodyRotateRate = 0;
let bodyWidth = 120;
let bodyHeight = 120;

//creating the draw function
function draw() {
background( 'pink' );
//no cursor on screen
noCursor();

//The Updating Values
//the body rotation rate
bodyRotateRate = ( mouseY * 0.5 ) - 20;
// body angle to equal itself plus rotation rate
bodyAngle = bodyAngle + bodyRotateRate;



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

strokeWeight(8);
fill( 'rgb(255, 116, 28)');
rotate( radians( bodyAngle ));
ellipse( 0, 0, bodyWidth, bodyHeight );

//***
//RIGHT EYE
//***
push();

strokeWeight(4);
fill(255);
//move to center of body
translate( bodyWidth * -0.2, bodyHeight * -0.2 );
ellipse( 0, 0, bodyWidth * 0.33, bodyHeight * 0.33 );

//iris
strokeWeight(2);
fill( 'rgb(45, 255, 123)');
ellipse( 0, 0, 20 );
//pupul
fill(0);
ellipse( 0, 0, 8 );

pop();

//***
//left EYE
//***
push();

strokeWeight(4);
fill(255);
//move to center of body
translate( bodyWidth * 0.2, bodyHeight * 0.2 );
ellipse( 0, 0, bodyWidth * 0.33, bodyHeight * 0.33 );

//iris
strokeWeight(2);
fill( 'rgb(45, 255, 123)');
ellipse( 0, 0, 20 );
//pupul
fill(0);
ellipse( 0, 0, 8 );

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
