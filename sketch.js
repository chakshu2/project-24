
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
	hammer=new Hammer(100,100);
	ground=new Ground(400,650);
	stone=new Stone(200,400);
	rubber=new Rubber(450,250);
	sand=new Sand(300,500)
	sand1=new Sand(350,500)
    sand2=new Sand(400,500)
    sand3=new Sand(440,500)
	sand4=new Sand(480,500)
	sand5=new Sand(570,500)
	sand6=new Sand(200,500)
	sand7=new Sand(250,500)
	iron=new Iron(530,400)


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron.display();
  
  
  drawSprites();
 
}



