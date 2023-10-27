let osc, playing, freq, amp, amp2;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator("sawtooth");
}

function draw() {
  background();
  osc.start();
  freq = contrain(map(noise(t), 0, 1, 100, 500), 100, 500);
  paneo = contrain(map(mouseX, 0, width, -1, 1), -1, 1);
  amp = 0.5;

  osc.pan(paneo);

  osc.freq(freq);
  osc.amp(amp, 0.1);
  t += 0.1;
}

// let osc, playing, freq, amp;

// function setup() {
//   let cnv = createCanvas(100, 100);
//   cnv.mousePressed(playOscillator);
//   osc = new p5.Oscillator("sine");
// }

// function draw() {
//   background(220);
//   freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
//   amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

//   text("tap to play", 20, 20);
//   text("freq: " + freq, 20, 40);
//   text("amp: " + amp, 20, 60);

//   if (playing) {
//     // smooth the transitions by 0.1 seconds
//     osc.freq(freq, 0.1);
//     osc.amp(amp, 0.1);
//   }
// }

// function playOscillator() {
//   // starting an oscillator on a user gesture will enable audio
//   // in browsers that have a strict autoplay policy.
//   // See also: userStartAudio();
//   osc.start();
//   playing = true;
// }

// function mouseReleased() {
//   // ramp amplitude to 0 over 0.5 seconds
//   osc.amp(0, 0.5);
//   playing = false;
// }
