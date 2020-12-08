class Throw{
    constructor(bodyA,pointB){
    var options={
     bodyA:bodyA,
     pointB:pointB,
     stiffness:0.04,
     length:0  
    }
    this.pointB=pointB;
    this.throw=Constraint.create(options);
    World.add(world,this.throw);
    }
    attach(body){
      this.throw.bodyA=body;
     }
    fly(){
      this.throw.bodyA=null  
    }
    display(){
    if (this.throw.bodyA){    
    var pointA=this.throw.bodyA.position
    var pointB=this.pointB
    strokeWeight(4);
    fill("black")
    line(pointA.x,pointA.y,pointB.x,pointB.y)    
    }
    }
  }
    