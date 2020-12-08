class Tree{
constructor(x,y){
var option={
isStatic:true   
}
this.body=Bodies.rectangle(x,y,300,550,option);
this.image=loadImage("Plucking mangoes/tree.png");
World.add(world,this.body)
}
display(){
var pos=this.body.position
imageMode(CENTER);
image(this.image,pos.x,pos.y,300,550)    
}

}