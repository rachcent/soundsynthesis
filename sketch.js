let angle = 1;
let x = 400;
let y = 400;
let q = 800;
let w = 800;
var fft = new p5.FFT();
var soundFile;
var suns =[];
let osc;
let playing = false;

let song;
let button;
let button2;


function preload() {
  song = loadSound('tchami.mp3');
}

function setup() {
  createCanvas(800, 800);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(2);
  osc.start();



button = createButton('play song');
button.position(19,19);
button.mousePressed(playSong);


button2 = createButton('play osc');
button2.position(50,50);
button2.mousePressed(playOsc);
}

function playOsc() {
  
    if (!playing) {
      // ramp amplitude to 0.5 over 0.05 seconds
      osc.amp(0.5, 0.05);
      playing = true;
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
    }
  }

function playSong() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
  } else {
    song.play();
  }
}


//crease

function draw() {
  background(0);
  fill(255);




// Run the analysis, while the audio is playing
fft.analyze();

// Get different values for different frequency ranges
// -----------------------------------------------------
// p5.sound comes with predefined keywords,
// but giving getEnergy() 2 numbers instead of a keyword
// you could use your custom range if needed
var bass    = fft.getEnergy( "bass" );
var treble  = fft.getEnergy( "treble" );
var mid     = fft.getEnergy( "mid" );
var custom  = fft.getEnergy( 100, 200 );



// Map the range of each volume with your desired numbers
var mapBass     = map( bass, 0, 255, -100, 100 );
var mapMid      = map( mid, 0, 255, -150, 150 );
var mapTreble   = map( treble, 0, 255, -200, 200 );




let level = amplitude.getLevel();
let size = map(level, 0, 1, 0, 200);

// Scale the level value from 1 to 800 to a range between 0 and 175
let sizecircle= map(level, 0, 1, 0, 700);

// ellipse(width/2, height/2, size, size);
var d = random(0, 255);
var e = random(0, 255);
var f = random(0, 255);

if (keyIsDown(LEFT_ARROW)) {
  q -= 2;
}
if (keyIsDown(RIGHT_ARROW)) {
  q += 2;
}
// Set the volume to a range between 0 and 1.0
let volume = map(q, 0, width, 0, 1);
volume = constrain(volume, 0, 1);
song.amp(volume);

if (keyIsDown(UP_ARROW)) {
  w -= 2;
}
if (keyIsDown(DOWN_ARROW)) {
  w += 2;
}
    //the circle being moved
    noFill();
    strokeWeight(2);
    stroke(d,e,f)
    ellipse(q, w, treble, treble)
// Set the rate to a range between 0.1 and 4
// Changing the rate alters the pitch
let speed = map(w, 0.1, height, 0, 2);
speed = constrain(speed, 0.01, 4);
song.rate(speed);

// for (var i = 0; i < 3; i++) {
//   drawSun[i]= new drawSun();
//   push();
// }
//   function mousePressed() {
//       suns.push(new drawSun());


rectMode(CENTER);
rect(60,20, mapBass, mapBass);
if (mapBass > 1){
  fill(255,0,0);
}
if (mapBass > 100){
  fill(0,0,255);
}


fill(d,e,f);
ellipseMode(CENTER);
ellipse(200,20, mapMid, mapMid);

fill(d,d,d);
rectMode(CENTER);
rect(600,20, mapTreble, mapTreble);


  //muiltiple suns
	for (var x = 1; x < 100; x = x+50){
		for (var y = 1; y < 100; y = y+50){
      push();
      translate(350, 350);
      ellipseMode(CENTER);
      rectMode(CENTER);
      drawBasscircles();
      drawRec();
      drawCircles();
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
  rectMode(CENTER);
  translate(x,y);
  fill(d,e,f);
  rotate(angle);
  rect(0,0, mapMid, mapMid);
}

function drawCircles(){
  //circles around the square
  translate(size, size );
  fill(d,e,f);
  ellipse(0, 0, mapMid, mapMid);
  translate(100, 100 );
  rect(size, size, 10, 10);
}




  //moves across the screen
  // x = x
  //rotates square
  angle = angle + size;
}
