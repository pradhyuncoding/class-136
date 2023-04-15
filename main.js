status = "";
img = "";
object = [];

function setup(){
    canvas = createCanvas(340,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(340,340);
    video.hide();
}

function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects"
document.getElementById("input").value;
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 340, 340)
}