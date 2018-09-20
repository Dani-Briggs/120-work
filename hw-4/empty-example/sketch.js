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


    pop();
    // **END BODY**


    // ** ARMS **********************************
    push();


    pop();
    // **END ARMS**


    // ** HEAD **********************************
    push();


    // **MOUTH**
    push();

    pop();
    // **END MOUTH**

    // **EYES**
    push();


    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
