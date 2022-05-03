Avatar_classics = "";
Somewhere_in_my_memory ="";
leftWristX= 0;
leftWristY= 0;
RightWristX= 0;
RightWristY= 0;

function preload()
{
    Avatar_classics = loadSound("Avatar the last airbender theme.mp3");
    Somewhere_in_my_memory = loadSound("Somewhere in my memory.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);       
}

function modelLoaded()
{
    console.log("Posenet is iniatilized!");
}


function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX =  results[0].pose.leftWrist.x 
        leftWristY = results[0].pose.leftWrist.y
        console.log("leftWristX = " + leftWristX + "leftWrist = " + leftWristY);
        RightWristX = results[0].pose.rightWrist.x
        RightWristY = results[0].pose.rightWrist.y
        console.log("RightWristX = " + RightWristX + "RightWristY = " + RightWristY);
    }

    
}

function draw()
{
    image(video, 0, 0, 600, 500);
}