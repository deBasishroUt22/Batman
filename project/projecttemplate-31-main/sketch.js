const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine 
var world
var rain = []
var unbrella 
function preload(){
    
}

function setup(){
   createCanvas(400,700)
    engine = Engine.create()
    world = engine.world
   if (frameCount % 150 === 0){
       for(var i = 0; i<100; i++){
           rain.push(new drop(random(0,400), random (0,400)))
       }
   }
   umbrella = new Umbrella (200,50)
}

function draw(){
    background (0)
    Engine.update(engine)
    for(var i = 0; i<100; i++){
        rain[i]. update() 
        rain [i].display()
        
    }
    umbrella.display()
}   

