class Dustbin{
	constructor(x,y,width,height){
   var options={
	   isStatic:true
 
   }
 
  this.body=Bodies.rectangle(x,y,width,height,options);
  
  World.add(world,this.body);
 
	}
	display(){
 
	 var dustbinSprite=this.body.position;
	  push()
	  translate(dustbinSprite.x,dustbinSprite.y);
	  rectMode(CENTER);
	   
	  strokeWeight(3);
	  fill(255,0,255)
	  rect(0,0,50,50);
 
	  pop();
	}
 
 }