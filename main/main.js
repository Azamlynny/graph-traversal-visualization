var wd;
var ht;
const b1 = new Button(10, 10, 50, 200, 0);

function setup() {
  frameRate(60);
  noStroke();
  wd = displayWidth;
  ht = displayHeight - 143; 
  createCanvas(wd, ht);
}

function draw() {
  background(0);
  rect(mouseX, mouseY, 55, 55); 
  b1.drawButton();
}
