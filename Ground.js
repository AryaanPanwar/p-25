class Ground{

constructor(x,y){


this.x=x;
this.y=y;
this.width=4000;
this.height=25;
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
World.add(world,this.body);

}
display(){

    var groundpos = this.body.position;
    push();
    translate(groundpos.x,groundpos.y)
    fill("red");
    stroke("black");
    strokeWeight(0);
    rect(0,0,this.width,this.height)
    pop();


}




}