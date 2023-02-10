var ball, ballImage;
var paddle;
var alienGroup;
var edges;
var blueImage, greenImage, redImage, yellowImage, paddleImage, bgImage;


function preload(){
    ballImage= loadImage("ball.png")
    blueImage= loadImage("blue.png")
    greenImage= loadImage("green.png")
    yellowImage= loadImage("yellow.png")
    redImage= loadImage("red.png")
    paddleImage=loadImage("Spaceship.png")
    bgImage=loadImage("bg.jpg")
}

// Se ejecutará una vez al inicio
function setup() {
    createCanvas(700, 700);
    ball = createSprite(340,550,10,10);
    ball.addImage("ball",ballImage);
    ball.scale=0.05;
    ball.velocityX =0;
    ball.velocityY =0;
   
   
    
    paddle = createSprite(340, 600, 120, 10);
    paddle.shapeColor = "blue";
    paddle.addImage("paddle",paddleImage)
    paddle.scale=0.1
    
    edges=createEdgeSprites();
    
   // Llamada en la clase 27
    createAlienRow(100, redImage);
    createAlienRow(100+65, blueImage);
    createAlienRow(100+65+65, yellowImage);
    createAlienRow(100+65+65+65, greenImage);
   
}


// Se ejecutará varias veces
function draw() {
    // Rellena el lienzo con un gris claro, cubriendo las imágenes previas
    background(bgImage);
    textSize(30);
    fill("black")
    text("Presiona la barra espaciadora para servir la pelota.", 10,380);

    
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    
    ball.bounceOff(paddle);
    
        paddle.x=mouseX
    if(keyDown("space")){

    ball.velocityX = 6;
    ball.velocityY = 6;
    }
    
    
    drawSprites();
}

// Agregado en la clase 27
function createAlienRow(y, alienImage) {
var x = 125
  for(var c=0; c<6; c++)
  {
    var alien = createSprite(x,y,50, 25);
     x+= alien.width + 40;
    alien.addImage("coloralien",alienImage);
    alien.scale=0.07;
      
}
}
    

