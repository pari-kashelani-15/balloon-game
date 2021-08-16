class Balloon100{
    constructor(x, y, width, height){
      var options = {
        isStatic : true
        //density : 1.0,
        //restitution : 0.8,
        //friction : 1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image = loadImage("100balloon.PNG");
      
      World.add(world, this.body);

    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    if(this.body.speed < 3){

     
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("red");
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }
    else{World.remove(world, this.body);
    }
    }
}