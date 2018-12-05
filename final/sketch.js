var song_a;
//var song_b;
//var song_c;



function setup(){
  createCanvas(windowWidth, windowHeight);
  song_a = loadSound("8-bit_sing_for_ab.mp3", loaded);
  song_a.setVolume(0.5);
  let x = width/2;
  let y = height;


}

function loaded(){
  song_a.play();
}


function draw(){
  background(200);


///*Album one - Absolution*
//***Shadow person one***
 push();
  //**body**
  fill(0, 0, 55);
  rect(550, 370, 50, 50);
  rect(500, 320, 50, 50);
  rect(450, 320, 50, 50);
  rect(500, 270, 50, 50);
  rect(450, 270, 50, 50);
  rect(400, 220, 50, 50);
  rect(400, 170, 50, 50);
  rect(400, 270, 50, 50);

  //**right leg**
  push();

  rect(450, 220, 50, 50);
  rect(450, 170, 50, 50);
  rect(450, 120, 50, 50);
  rect(450, 70, 50, 50);
  rect(450, 20, 50, 50);
  pop();

  //**left leg**
  push();
  rect(350, 170, 50, 50);
  rect(350, 120, 50, 50);
  rect(350, 70, 50, 50);
  rect(350, 20, 50, 50);
  pop();

  //**Right Arm**
  push();
  rect(550, 220, 50, 50);
  rect(600, 170, 50, 50);
  rect(650, 120, 50, 50);
  pop();

  //**left Arm**
  push();
  rect(400, 370, 50, 50);
  rect(350, 420, 50, 50);
  rect(300, 470, 50, 50);
  pop();

pop();

//**Shadow person two**
push();
 //**body**
 fill(0, 0, 55);
 translate(750, 10);
 scale(0.5, 0.5);
 rect(550, 370, 50, 50);
 rect(500, 320, 50, 50);
 rect(450, 320, 50, 50);
 rect(500, 270, 50, 50);
 rect(450, 270, 50, 50);
 rect(400, 220, 50, 50);
 rect(400, 170, 50, 50);
 rect(400, 270, 50, 50);
 //**right leg**
 push();

 rect(450, 220, 50, 50);
 rect(450, 170, 50, 50);
 rect(450, 120, 50, 50);
 rect(450, 70, 50, 50);
 rect(450, 20, 50, 50);
 pop();

 //**left leg**
 push();
 rect(350, 170, 50, 50);
 rect(350, 120, 50, 50);
 rect(350, 70, 50, 50);
 rect(350, 20, 50, 50);
 pop();

 //**Right Arm**
 push();
 rect(550, 220, 50, 50);
 rect(600, 170, 50, 50);
 rect(650, 120, 50, 50);
 pop();

 //**left Arm**
 push();
 rect(400, 370, 50, 50);
 rect(350, 420, 50, 50);
 rect(300, 470, 50, 50);
 pop();

pop();

//**standing person**
//*body*
push();


pop();

}
