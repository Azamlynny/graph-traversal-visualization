var screenWidth;
var screenHeight;
const b1 = new Button(10, 10, 50, 200, 0, "run", "Run");
const grid = new Grid(30);

function setup() {
  frameRate(60);
  noStroke();
   screenWidth = displayWidth;
   screenHeight  = displayHeight - 143; 
  createCanvas(screenWidth, screenHeight);
  textAlign(CENTER);
  //console.log(screenWidth);
  
  grid.makeGrid(screenWidth, screenHeight);
}


function draw() {
  background(240);
  grid.drawGrid(screenWidth, screenHeight);
  
  b1.drawButton();
    
  noStroke();
  fill(0);
  rect(mouseX, mouseY, 5, 5); 
}
