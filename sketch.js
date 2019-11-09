let angle = 1;
let x = 400;
let y = 400;


let song;

function preload() {
  song = loadSound('tchami.mp3');
}

function setup() {
  createCanvas(800, 800);
  amplitude = new p5.Amplitude();
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
let sizecircle= map(level, 0, 1, 0, 1000);
// ellipse(width/2, height/2, size, size);
var d = random(0, 255);
var e = random(0, 255);
var f = random(0, 255);

noFill();
stroke(d,e,f)
ellipse(x, y, sizecircle, sizecircle);

  translate(x,y);
  fill(d,e,f);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0, size, size);

  translate(size, size );
  fill(d,e,f);
  ellipse(0, 0, size, size);
  translate(100, 100 );
  rect(level, level, 20, 20);


  //moves across the screen
  x = x
  //rotates square
  angle = angle + size;
}
