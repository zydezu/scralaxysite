const fullFlash = document.getElementById("fullFlashFade");
var loadingNextPage = false;
var BGM = document.createElement('audio');
BGM.loop = true

var track = `File Select -  Super Mario Galaxy.mp3`
BGM.src = `assets/BGM/${track}`

if (localStorage.loadingNextPage == "true"){
    BGM.play();
    setTimeout(function () {
        fullFlash.classList.add("hidden")
    }, 500)
} else {
    fullFlash.classList.add("hidden")
}
localStorage.loadingNextPage = "false";

function playSound(soundsrc) {
    var sound = document.createElement('audio');
    sound.src = soundsrc
    sound.play();
}

function randomHoverSFX() {
    var sound = document.createElement('audio');
    sound.src = `assets/SFX/hover${Math.floor(Math.random() * 10) + 2}.mp3`
    sound.play();
}

window.addEventListener('click', () => {
    BGM.play();
})

window.addEventListener('keydown', () => {
    BGM.play();
})