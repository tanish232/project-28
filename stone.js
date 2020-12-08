class Stone{
constructor(x,y,r){
var op={
isStatic:true,
restitution:0,
friction:1
}
this.body=Bodies.circle(x,y,r,op)
this.radius=r;
this.image=loadImage("Plucking mangoes/stone.png")
this.image.scale=0.5
World.add(world,this.body)
}
display(){
var pos=this.body.position
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.radius)    

    }

    
}