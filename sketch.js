//Create variables here
var dog, happyDog, database, foodS, foodStock;
var buttonAddFood, buttonFeedPet;
var fedTime, lastFed;
var foodObj;


function preload()
{
	//load images here
  this.image = loadImage("images/dogImg.png");
  this.image = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);

  feed=createButton("Feed the dog");
  feed.position(700, 95)

  dog = new Dog (250, 250)
  
}


function draw() {  

  background(46, 139, 87);


    if (keyPressed=UP_ARROW){

      foodStock=-1;

      this.dog = loadImage ('images/dogImg1');
     //change dog sprite to happyDog.
    }
  drawSprites();
  //add styles here

}



