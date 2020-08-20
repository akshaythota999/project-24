
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new dustbin(500,690,47,100)
	dustbin2=new dustbin(547,690,100,20)
	dustbin1=new dustbin(647,690,47,100)
	paper1=new paper(150,690,10,)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    dustbin1.display();
	dustbin2.display();
	dustbin1.display();
	paper1.display();
	keypressed();
  drawSprites();
 
}
function keypressed(){
if(keyCode === UP_ARROW){
	Body.applyForce(paper2.Bodies,paper2.Bodies.position,{x:85,y:-85});

}


}



