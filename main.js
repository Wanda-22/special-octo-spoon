obj=[];
sta="";

function setup() {
    canvas=createCanvas(500,400);
    canvas.center();
}
function preload() {
    v=createVideo("video.mp4");
    v.hide();
}
function draw() {
    image(v,0,0,500,400);
    if (sta!="") {
        f.detect(v,j);
        for (let i = 0; i < obj.length; i++) {
            document.getElementById('sa').innerHTML=" Status- Object Detected";
            document.getElementById('nu').innerHTML="Number of objects- " + obj.length;
            fill("#FF69B4");
            noFill();
            stroke("#FF69B4");
            c=floor(obj[i].confidence*100);
            textSize(20);
            text(obj[i].label + " " + c + "%" , obj[i].x+15 , obj[i].y+15);
            rect(obj[i].x , obj[i].y , obj[i].width , obj[i].height);
        }
    }
}
function start() {
    f=ml5.objectDetector('cocossd',load);
    document.getElementById('sa').innerHTML=" Status Detecting";
}
function load() {
    console.log("done");
    sta=true;
    v.loop();
    v.speed(1);
    v.volume(0);
}
function j(error,result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    obj=result;
}