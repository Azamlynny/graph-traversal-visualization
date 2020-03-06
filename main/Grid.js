class Grid {
  
  constructor(boxWidth) {
    this.boxWidth = boxWidth;
  }
  
  makeGrid(screenWidth, screenHeight){
    this.row = Math.floor(screenHeight / this.boxWidth);  
    this.col = Math.floor(screenWidth / this.boxWidth);
  }
  
  //// Getter
  //get area() {
  //  return this.calcArea();
  //}

  // Method
  drawGrid (screenWidth, screenHeight) {
    stroke(100);
    strokeWeight(1);
    fill(0);
    for (let i = 0; i <= this.col; i++) {
      line((i * this.boxWidth), 0, (i * this.boxWidth), this.boxWidth * (this.row));
    }
    for (let i = 0; i <= this.row; i++) {
      line(0, (i * this.boxWidth), this.boxWidth * (this.col), (i * this.boxWidth));    
    }
  }
  
}
