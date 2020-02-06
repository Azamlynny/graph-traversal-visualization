class Button {
  
  constructor(x, y, wd, ht, state) {
    this.x = x;
    this.y = y;
    this.wd = wd;  
    this.ht = ht;
    this.state = state;
  }
  
  //// Getter
  //get area() {
  //  return this.calcArea();
  //}

  // Method
  drawButton() {
    rect(this.x,this.y,this.wd,this.ht);
  }
}
