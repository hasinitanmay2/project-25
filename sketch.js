const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ground,brick1,brick2,brick3;
 var paperSprite;
 var paper;
function preload()
{
	dustbinImg=loadImage("dustbingreen.png")
    ballImg=loadImage("paper.png");

	
}

function setup() {
	
	createCanvas(800, 700);
    //Create the Bodies Here.
	
	groundSprite=createSprite(width/2, 560, width,10);
	groundSprite.shapeColor=color(255);
	dustbin=createSprite(740,450,20,20);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.5;
	paper=createSprite(40,450,70);
	paper.addImage(ballImg);
	paper.scale=0.5;
	
	engine = Engine.create();
	world = engine.world;
	dustBin=new Dustbin(740,500,20,20);
	
	groundSprite.shapeColor="red";
	
	paperSprite= new paperClass(40,450,70);
	
	World.add(world,paperSprite)
   Engine.run(engine);
      
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperSprite.display();
  dustBin.display();
  paperSprite.x=paper.x;
  paperSprite.y=paper.y;
  
 
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	  	Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:90,y:-90});
	  Matter.Body.setStatic(paperSprite.body,false);
		}



	                
	}
