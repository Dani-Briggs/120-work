var song_a;
//var song_b;
//var song_c;



function setup(){
  createCanvas(300, 300);
  song_a = loadSound("8-bit_sing_for_ab.mp3", loaded);
  song_a.setVolume(0.5);

}

function loaded(){
  song_a.play();
}


function draw(){
  background(200);
}
