class Grid {
  
  constructor(boxWidth, screenWidth, screenHeight) {
    this.boxWidth = boxWidth;
    
    this.row = (screenWidth / boxWidth);  
    this.col = (screenHeight / boxWidth);
    console.log(this.row);
  }
  
  //// Getter
  //get area() {
  //  return this.calcArea();
  //}

  // Method
  drawGrid (screenWidth, screenHeight) {
    stroke(0);
    for (let i = 0; i <= this.col; i++) {
      line(i * this.boxWidth, 0, i * this.boxWidth, screenHeight);    
    }
    for (let i = 0; i <= this.row; i++) {
      line(0, i * this.boxWidth, screenWidth, i * this.boxWidth);    
    }
  }
  
}
