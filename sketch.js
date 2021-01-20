function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(1);
  //stroke(120,150, 2)
  noFill();
  noStroke();
  frameRate(1);
}

function draw() {
    //takes two perameters how far x and y
    //+x direction = right
    //+ydirection = down
  
    //translated origin point
    translate(30,0);
    //dividing canvas to be a squre
    var width = innerWidth-2*30;
    var height = innerWidth-2*30;
  
    var space = 20;
    var shift= 5;
    var numSquares =30;

    // ammount of space needed to translate x and y
    //calculating how large each square should be given the amount of sqres you want
    var sideLen = width/numSquares
    
           var min = Math.random()*140+1;
          console.log (min)
            var max = Math.random()*116+140;
           console.log(max);
          var randColor1 = Math.random()*255+1;
          var randColor2 = Math.random()*255+1;
    
    // for loop - everything calculated from inputs
    //conditions - don't want x and y to go past x and y
    
    for(var y = 0; y<height; y = y+sideLen){
      
     
        for(var x = 0; x<width; x =x+sideLen){
            //x value is starting point
            var red = random(0,255);
            var green = random(0,255);
            var blue =random(0,255);
            //fill (red +50, green+50, blue+50);
          
          
            
            //OUTSIDE SQUARES
            //quad(x,y, x+sideLen,y, x+sideLen,y+sideLen, x, y+sideLen);
          
            //var min = 140;
            //var max = 255;
           
         
          
            var a = -4*(min-max)/Math.pow(width,2);
            var b = 4*(min-max)/width;
            //console.log((a * Math.pow(x,2) - a*x + max));
          
            var xBlue = (a * Math.pow(x,2) + b*x + max);
            var yBlue = (a * Math.pow(y,2) + b*y + max);
            //var xSq = Math.pow(x,2);
            //var ySq = Math.pow(y,2);;  
            //var r = Math.sqrt((xSq + ySq));
            //var rColor = (a * Math.pow(r,2) + b*r + max)
  
          
            //fill (0,0, Math.max(xBlue,yBlue));
             //fill (50, Math.max(xBlue,yBlue), 50);
            //fill (randColor1,randColor2,Math.max(xBlue,yBlue));
            fill (Math.max(xBlue,yBlue),randColor1,randColor2);
           
         
            //fill (0,0, Blue);
            //fill(150,0, rColor);
            
            //quad(x + random(-shift, shift) ,y , x+sideLen,y, x+sideLen,y+sideLen +random(-shift, shift), x, y+sideLen);
          quad(x ,y , x+sideLen,y, x+sideLen,y+sideLen, x, y+sideLen);
          
          
            //INSIDE SQUARES
            //fill(red , green, blue);
            //fill (255-red, 255-green, 255-blue);
            //fill(153, 204, 255);
            //fill(0, 0,Math.min(xBlue,yBlue))
          
            //quad (x + space, y+space, x+sideLen-space, y+space, x+sideLen-space, y+sideLen-space, x+space, y+sideLen-space);
          
           
          //ellipse(x+space, y+space, 40, 40);
          
          }
        
    }
 
  
  
  
  

 
  
  //assignment/ challenges
  // play with spacing of the boxes b/w each square and b/w each row
  // test color so that different rows are different colors
  // test stroke so that different rows are different strokes
    
    
    //creating 4 other squares to make a 2x2 grid
    //quad (0,0, 0,200, 200,200, 200,0);
    //quad(200,0, 200,200, 400,200, 400,0);
    //quad(0,200, 200,200, 200,400, 0,400);
    //quad(200,200, 400,200, 400,400, 200,400);
  
    //extra design to 2x2 grid
    //quad(0,0, 300,0, 300,300, 0,300);
    //quad(100,400, 100,100, 400,100,400,400);
    //quad(150,150, 250,150, 250,250, 150,250);
    

  noLoop();
}