let progressbar = document.getElementById("progressbar");
let song = document.getElementById("song");
let play = document.getElementById("play");

song.onloadedmetadata = function(){
    progressbar.max = song.duration;
    progressbar.value = song.currentTime;
}

function playpause(){
    if(play.classList.contains("fa-pause")){
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
    else{
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progressbar.value = song.currentTime;
    },500);
}

progressbar.onchange = function(){
    song.play();
    song.currentTime = progressbar.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
}