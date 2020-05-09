class Chain {
    constructor(bodyA,bodyB){
      var option = {
          stiffness:0.2,
          length:12,
          bodyA:bodyA,
          bodyB:bodyB
      }
      this.chain=Matter.Constraint.create(option);
      World.add(world,this.chain);
      
    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
        
    }
}