Dani Briggs, 50

//creating a new character
//seting it up
function setup() {
  createCanvas( windowWidth, 900 );

}

//seting the varables
let bodyAngle = 0;
let bodyRotateRate = 0;
let bodyWidth = 90;
let bodyHeight = 90;


//creating the draw function
function draw() {

  //no cursor on screen
  noCursor();

    background( 'pink' );

    //The Updating Values
    //the body rotation rate
    bodyRotateRate = ( mouseY * 0.5 ) - 20;
    // body angle to equal itself plus rotation rate
    bodyAngle = bodyAngle + bodyRotateRate;

    // character follows mouse
    translate( mouseX, mouseY );

    //***
    // character sandbox
    //***
    push();

    //***
    //BODY
    //***
    push();

    strokeWeight(8);
    fill( 'rgb(255, 116, 28)');
    translate(0,-60);
    rotate( radians( bodyAngle ));
    ellipse( 0, 0, bodyWidth, bodyHeight );

    //***
    //EYE
    //***
    push();

    strokeWeight(4);
    fill(255);
    //move to center of body
    translate( bodyWidth * -0.2, bodyHeight * -0.2 );
    ellipse( 0, 0, bodyWidth * 0.33, bodyHeight * 0.33 );

    pop();

    push();
    //iris
    strokeWeight(2);
    fill( 'rgb(45, 255, 123)');
    ellipse( 0, 0, 10 );
    //pupul
    fill(0);
    ellipse( 0, 0, 5 );

    pop();
    pop(); // end of body



    pop(); //End of character

}
