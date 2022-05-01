Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("Result").innerHTML ='<img id="SnapShot" src="'+data_uri+'">';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QfS7UEUwZ//model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

var prediction1 ="";
var prediction2 ="";

function speak(){
    var synth = window.speachSynthesis;
    speak_data1 = "The first prediction is "+prediction1;
    speak_data2 = "The second prediction is "+prediction2;
    var utter_this = new SpeechSynthesisUtterance( speak_data1 + speak_data2 );
    synth.speak(utter_this);
}