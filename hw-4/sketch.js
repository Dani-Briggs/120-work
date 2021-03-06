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

      //belly
      strokeWeight(4);
      fill('yellow');
      rect( -105, -105, 200, 300, 90 );

    pop();
    // **END BODY**


    // ** ARMS **********************************
    push();
    //right ARM
    strokeWeight(4);
    fill('red');
    rect( 145, -20, 50, 100, 90 );

    //right hand
    fill('pink');
    ellipse( 170, 90, 66, 66 );


    //left hand
    fill('pink');
    ellipse( -240, -90, 66, 66 );

    //left ARM
    rotate( radians(135) );
    strokeWeight(4);
    fill('red');
    rect( 90, 115, 50, 100, 90 );



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
    //right tooth
    fill(255);
    triangle( 60, -200, 80, -200, 80, -180 );
    //left tooth
    fill(255);
    triangle( -20, -200, -40, -200, -40, -180 );

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
    //left leg
    strokeWeight(4);
    fill('red');
    rect( -115, 250, 50, 100, 90 );

    //left foot
    fill('pink');
    ellipse( -100, 370, 66, 66 );

    //right leg
    strokeWeight(4);
    fill('red');
    rect( 55, 250, 50, 100, 90 );

    //right foot
    fill('pink');
    ellipse( 80, 370, 66, 66 );

    pop();
    // **END LEGS**

    // ** END CHARACTER SANDBOX *******************
    pop();

}
