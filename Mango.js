class Mango{

constructor(x,y,r){

var options = {
isStatic:true,
'restitution':0,
'friction':1

}
this.x=x;
this.y=y;
this.r=20;
this.body=Bodies.circle(this.x, this.y, this.r/2, options)
World.add(world, this.body);
this.image=loadImage("mango.jpg");


}

display(){


    var mangopos=this.body.position;		

    push();
    translate(mangopos.x,mangopos.y)
    rectMode(CENTER)
    fill("blue");
    stroke("black");
    strokeWeight(0);
    image(this.image,0,0,this.r, this.r);
    pop();



}





}