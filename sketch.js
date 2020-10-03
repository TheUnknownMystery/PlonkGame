const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var Plinkos = [];
var PlinkosSize = 300
function setup() {
  createCanvas(800, 400);
  engine= Engine.create();

  world = engine.world;
  


  Engine.run(engine);
}

function draw() {
  background(255, 255, 255);

  for (var k = 0; k <= width; k = k + 80) {

    Plinkos.push(new Divder(k, height - PlinkosSize / 2, 10, PlinkosSize))


  }
}