const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy,stone;
var backgroundImg,platform;
var mango, tree,slingshot;
var Img_tree;

var gameState = "onSling";
var bg = "Plucking mangoes/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
    Img_tree=loadImage("Plucking mangoes/tree.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    mango = new Mangoes(780,100);

    tree = createSprite(800,200,40,40);
    tree.addImage(Img_tree);
    tree.scale=0.35

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    stone = new Stone(200,50);

    boy = new Boy(stone.body,{x:200, y:50});

    
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    ground.display();

    stone.display();
    platform.display();
    boy.display();
    mango.display();

    drawSprites();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    boy.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       boy.attach(stone.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "Plucking mangoes/bg1.png";
    }
    else{
        bg = "Plucking mangoes/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
}


