let angle = 1;
let x = 400;
let y = 400;
var fft = new p5.FFT();


let song;

function preload() {
  song = loadSound('tchami.mp3');
}

function setup() {
  createCanvas(800, 800);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
  } else {
    song.play();
  }
}

function draw() {
  background(0);
fill(255);
let level = amplitude.getLevel();
let size = map(level, 0, 1, 0, 200);

// Scale the level value from 1 to 800 to a range between 0 and 175
let sizecircle= map(level, 0, 1, 0, 700);

// ellipse(width/2, height/2, size, size);
var d = random(0, 255);
var e = random(0, 255);
var f = random(0, 255);

  //muiltiple suns
	for (var x = 5; x < 800; x = x+50){
		for (var y = 5; y < 800; y = y+50){
			push();
			translate(x, y);
      rotate(mouseY);
	  	drawSun();
			pop();
		}
  }

function drawSun(){
  //bass circles
  noFill();
  strokeWeight(2);
  stroke(d,e,f)
  ellipse(x, y, sizecircle, sizecircle);

  //rectangle in the center
  translate(x,y);
  fill(d,e,f);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0, size, size);

  //circles around the square
  translate(size, size );
  fill(d,e,f);
  ellipse(0, 0, size, size);
  translate(100, 100 );
  rect(0, 0, 20, 20);


  //moves across the screen
  x = x
  //rotates square
  angle = angle + size;
}
}
