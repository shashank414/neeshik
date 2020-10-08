class Tree {
    constructor(x,y){
      // super(x,y,300,500);
      this.image = loadImage("tree.png");
      this.boyimage = loadImage("neeshik.jpeg");
    }
  
    display() {
  image(this.image, 400,0, 400,400);
  image(this.boyimage,100,230,100,150);
    }
  }