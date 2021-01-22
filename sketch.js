
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var stoneObj,stoneIMG;
var boy,boyIMG;
var mango1;
var tree,treeIMG;


function preload()
{
	boyIMG=loadImage("boy.jpg")
	treeIMG=loadImage("tree.jpg")
	

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(2000,400);
	stoneObj = new Stone(600,200,50,50);
	boy=createSprite(100,280,10,10);
	boy.addImage(boyIMG);
	mango1 = new Mango(490,120);

	chain = new Chain(stoneObj.body,{x:100,y:150});
	tree=createSprite(700,200,70,70);
	tree.addImage(treeIMG);
	tree.scale=1.5;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

   
  
   ground.display();
   stoneObj.display();
   boy.display();
   mango1.display();
   chain.display();
   tree.display();
  

  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
	}


