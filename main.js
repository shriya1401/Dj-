song=""

function preload(){
 song=loadSound("music.mp3")
}


function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO)
    video.hide();

}

function draw(){
    image(video,0,0,600,600);
}


function play(){
    song.play()
}

function stop(){
    song.stop()
}

