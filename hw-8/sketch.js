//creating the canvas
function setup() {
  createCanvas(windowWidth, 500);
  background(0);
  noStroke();
  frameRate(10);

}

function draw(){

//setting varables
  let num_per_row = 10;
  let size = 20;
  let pad = 20;

  let x_spacing = (width-pad*2) / (num_per_row-1);
	let y_spacing = (height-pad*2) / (num_per_row-1);


//creating the for loop
  rectMode(CENTER);
  for( let i=0; i < num_per_row; i++ ) {

      fill( 255, 140, random(255) );
			rect(i*x_spacing+pad,	i*y_spacing+pad, size, size);
		}
	}


}
