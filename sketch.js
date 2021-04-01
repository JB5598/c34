var ball;
var database,position;
function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(300,300,10,10);
    ball.shapeColor = "red";
    var ballposition = database.ref('b/p')
    ballposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(position !== undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }
    drawSprites();
}
}

function changePosition(x,y){
    database.ref("b/p").set({
        "x":position.x + x , "y":position.y + y 
    })

}
function readposition(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y 
}
function showerror(){
    console.log("error message")
}