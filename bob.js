class Bob {
    constructor(x,y){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width  = 50;
        this.height = 50;
        this.image=loadImage("bird.png");
        World.add(world,this.body);
    }
    display(){
        
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
    }
}