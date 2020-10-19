class Garbage {
  constructor(x, y, width, height) {
    var options = {
       isStatic:true
    }
    
    this.width = width;
    this.height = height;

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage('dustbin.png')

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(500);
    rect(0, 0, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 0, 0, 200,270);
    pop();
  }
}
