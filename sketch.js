var player;
function setup() {
  createCanvas(400,400);
  player = createSprite(200,200,26,26);
}


function draw() 
{
  background(222);
  if (keyIsDown(RIGHT_ARROW))
  {
    player.position.x += 5;
  }

  if (keyIsDown(LEFT_ARROW))
  {
    player.position.x -= 5;
  }

  if (keyIsDown(UP_ARROW))
  {
    player.position.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW))
  {
    player.position.y += 5;
  }

  drawSprites();
}




