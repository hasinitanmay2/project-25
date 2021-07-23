class Paper{
    constructor(x,y,radius) {
        var options = {
            restitution:0.3,
            friction:1,
            density:2,
            isStatic:true

        }
        this.body = Bodies.circle(x,y, radius, options);
        this.image=loadImage("paper.png");
       
        World.add(world, this.body);
      }
    
    display(){

     var paperSprite=this.body.position;
      push();
      translate(paperSprite.x,paperSprite.y);
      ellipseMode(RADIUS);
       
      strokeWeight(3);
      fill("white")
      ellipse(0,0,30,0);

      pop();



    }
}