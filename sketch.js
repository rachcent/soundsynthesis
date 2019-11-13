let angle = 1;
let x = 400;
let y = 400;
var fft = new p5.FFT();
var soundFile;
var suns =[];


let song;

function preload() {
  song = loadSound('tchami.mp3');
}

function setup() {
  createCanvas(800, 800);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();
}

function gotFile(file){
  if ((!soundFile) && (file.type == "audio")) {
    soundFile = new p5.SoundFile(file.data);
    initSound();
  }
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

// Set the volume to a range between 0 and 1.0
let volume = map(mouseX, 0, width, 0, 1);
volume = constrain(volume, 0, 1);
song.amp(volume);

// Set the rate to a range between 0.1 and 4
// Changing the rate alters the pitch
let speed = map(mouseY, 0.1, height, 0, 2);
speed = constrain(speed, 0.01, 4);
song.rate(speed);

// for (var i = 0; i < 3; i++) {
//   drawSun[i]= new drawSun();
//   push();
// }
//   function mousePressed() {
//       suns.push(new drawSun());


  //muiltiple suns
	for (var x = 5; x < 200; x = x+50){
		for (var y = 5; y < 200; y = y+50){
      push();
      drawBasscircles();
      Rec();
      drawCircles();
      ellipseMode(CENTER);
      rectMode(CENTER);
      translate(width/2, height/2);
      rotate((mouseX/width)*2*PI);
			pop();
		}
  }

function drawBasscircles(){
  //bass circles
  noFill();
  strokeWeight(2);
  stroke(d,e,f)
  ellipse(x, y, sizecircle, sizecircle);
}

function drawRec(){
  //rectangle in the center
  translate(x,y);
  fill(d,e,f);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0, size, size);
}

function drawCircles(){
  //circles around the square
  translate(size, size );
  fill(d,e,f);
  ellipse(0, 0, size, size);
  translate(100, 100 );
  rect(0, 0, 20, 20);
}





  //moves across the screen
  // x = x
  //rotates square
  angle = angle + size;
}
