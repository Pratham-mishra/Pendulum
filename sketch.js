const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
 
var engine,world;
var bob;
var log;
var chain;
function setup(){
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
  
    bob   = new Bob(200,200);
    log   = new Log(100,200,100,20);
    chain = new Chain(bob.body,log.body); 
}
function draw(){
  background(255);
  bob.display();
  log.display();
  chain.display();
}