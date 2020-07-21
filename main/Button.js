class Button {
  
  constructor(x, y, wd, ht, state, type, text) {
    this.x = x;
    this.y = y;
    this.wd = wd;  
    this.ht = ht;
    this.state = state;
    this.type = type;
    this.text = text;
  }
  
  //// Getter
  //get area() {
  //  return this.calcArea();
  //}

  // Method
  drawButton() {
    fill(255);
    if(this.type == "run"){
      fill(89, 212, 78);
    }
    rect(this.x,this.y,this.wd,this.ht);
  
    textSize(16);
    fill(0);
    text(this.text, this.x + this.wd / 2, this.y + this.ht / 2);
  }
  
  
}
