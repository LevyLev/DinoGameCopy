let man;
let manImg;
let coneImg;
let backImg;
let cones=[];
let gameOver=document.querySelector(".game-over");
let score=document.getElementById("score");
let num=1;

const jumpSound = new Howl({
    src: ['sounds/jump.wav']
  });
const gameOverSound= new Howl({
    src:['sounds/game-over.wav']
});

function preload(){
    manImg=loadImage('img/walking-man.png');
    coneImg=loadImage('img/trafic-cone.png');
    backImg=loadImage('img/newYork.png');

}

function setup(){
    createCanvas(1520,400);
    man=new Man();
}

function mousePressed(){
    cones.push(new Cone());
}

function keyPressed(){
    if(keyCode === UP_ARROW || keyCode===32 && gameOver.style.visibility===""){
        man.jump();
        jumpSound.play();
    }
    if(keyCode===32 && gameOver.style.visibility==="visible"){
        location.reload()
    }
}

function draw(){
   
    if(random(1) < 0.01){
        cones.push(new Cone());
        console.log(random(1));
    }
    background(166, 124, 107);
    image(backImg,-3,0,1526,300);
    //watter
    noStroke();
    fill(0,0,50);
    rect(0,300,1520,50);
    //
    fill(50);
    rect(0,350,1520,50);

    for(let c of cones){
        c.move();
        c.show();
        if(man.hits(c)){
            gameOver.style.visibility="visible";
            gameOverSound.play();
            noLoop();
        }
    }
    man.show();
    man.move();
    console.count(man.x-49);

}

(function () {
    var old = console.count;
    var logger = document.getElementById('time-score');
    console.count = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) ;
        } else {
            let num=parseInt(logger.innerHTML);
            logger.innerHTML =num+message;
        }
    }
})();
