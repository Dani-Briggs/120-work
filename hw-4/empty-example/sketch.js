function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 600, 900 );
}

function draw() {
    // set the background color
    background( 'teal' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 300, 450 );


    // ** BODY **********************************
    push();
      strokeWeight(4);
      fill('red');
      rect( -155, -145, 300, 400, 90 );

    pop();
    // **END BODY**


    // ** ARMS **********************************
    push();


    pop();
    // **END ARMS**


    // ** HEAD **********************************
    push();
      strokeWeight(4);
      fill('red')
      rect( -158, -420, 300, 300, 150, 0, 90, 0 );

    // **MOUTH**-
    push();
    //line for mouth
    line( -50, -200, 100, -200 );
    //teeth
    


    pop();
    // **END MOUTH**

    // **EYES**
    push();
    //*left EYE*
    //white part
    fill(255);
    ellipse( -90, -300, 66, 66 );
    //left pupul
    fill(0);
    ellipse( -90, -300, 36, 36 );

    //*right eye*
    //white part
    fill(255);
    ellipse( 90, -300, 66, 66 );
    //right pupul
    fill(0);
    ellipse( 90, -300, 36, 36 );

    pop();
    // **END EYES**



    pop();
    // **END HEAD**

    // ** LEGS **********************************
    push();


    pop();
    // **END LEGS**

    // ** END CHARACTER SANDBOX *******************
    pop();

}
