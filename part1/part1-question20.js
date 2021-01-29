function timeLoop(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    
}

var intervalID = setInterval(timeLoop,[1000]);