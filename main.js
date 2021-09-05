function setup(){
    video = createCapture(VIDEO);
    video.size(430, 430);

    canvas = createCanvas(430, 430);
    canvas.position(560, 237);

    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('#ee8289');
}

function modelLoaded(){
    console.log('model loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}