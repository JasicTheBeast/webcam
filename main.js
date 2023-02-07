Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
}

);

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML = '<img id="captured_image src"'+data_URI+'"/>'

    });
}


console.log('ml5 version:', ml5.version);



