song1="Marshmello, Demi Lovato - OK Not To Be OK (Pendona.com).mp3";
song2="BTS-Dynamite-(TrendyBeatz.com).mp3";

leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function preload()
{
    song1=loadSound("Marshmello, Demi Lovato - OK Not To Be OK (Pendona.com).mp3");
    song1=loadSound("BTS-Dynamite-(TrendyBeatz.com).mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    //video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0) {
        console.log (results);
        leftwristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftwristX="+leftwristX+"leftwristY="+leftwristY);
        rightwristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightwristX="+rightwristX+"rightwristY="+rightwristY);
        
    }
}