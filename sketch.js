
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Bin(1000,280,150,15);
	box2=new Bin(917,238,20,100);
	box3=new Bin(1080,238,20,100);
    paper=new Paper(100,100);
	ground = Bodies.rectangle(width/2, 250, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

     box1.display();
	 box2.display();
	 box3.display();
	 paper.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) 
	{ 
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 }

}


