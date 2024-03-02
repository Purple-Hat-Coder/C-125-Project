difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(10, 130);

    canvas = createCanvas(500, 300);
    canvas.position(430, 180);

    poseNet = ml5.poseNet(video, modelDone);
    poseNet.on('pose', gotPoses);
}

function modelDone() {
    console.log('PoseNet is initialized!');
}

function draw() {
    background('#295a9e');
    document.getElementById("font_size").innerHTML = "The font size of the text is: " + difference + "px";  
    textSize(difference);
    fill("#ffffff");
    text('Hello, I am John', 50, 50);
}

function gotPoses(results, error) {
    if(error) {
        console.error(error);
    }
    if(results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}
    
