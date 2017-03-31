var numbers = [15, 22, 48, 37];
var habits = ["When you smile", "the whole world", "stops", "and", "stares", "for a", "while."];
var j = 0;

function setup(){
    createCanvas(660,400);
}

function draw(){
    background(238,130,238);
    
    for(var i = 0; i < 4; i++){
         ellipse((i+1)*100,200,numbers[i], numbers[i]);
    }
    
    fill(255);
    textSize(50);
    text(habits[j], 250, 150);
}

function mousePressed(){
    j ++; 
    if(j==7){
        j=0;
    }
}