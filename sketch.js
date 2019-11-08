let angle = .5;
let x = 200
let y = 200


let song;

function preload() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
}

function setup() {
  createCanvas(710, 200);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0, 255, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function draw() {
  background(0);
  
 
  translate(x,y);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,50,50);
  
  translate(50,50)
  fill(255,100,50)
  rect(0, 0, 20, 20);
  
  //moves across the screen
  // x = x + 1;
  //rotates square
  angle = angle + 1;
}
