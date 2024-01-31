const fullFlash = document.getElementById("fullFlash");
const flash = document.getElementById("flash");
const pressZX = document.getElementById("pressZX");
var keysPressed = {};
var loadingNextPage = false;
var BGM = document.createElement('audio');
BGM.loop = true
localStorage.loadingNextPage = "false";

let trackNames = [
    `E3 Demo Bubble Intro - Super Mario Galaxy OST.mp3`,
    `Freezeflame Galaxy (Ice) -  Super Mario Galaxy.mp3`,
    `Observation Dome -  Super Mario Galaxy.mp3`,
    `Slimy Spring Galaxy - Super Mario Galaxy 2.mp3`,
    `Space Fantasy - Super Mario Galaxy.mp3`,
    `Super Mario Galaxy 2 Soundtrack - Cosmic Cove Galaxy.mp3`,
    `Super Mario Galaxy 2 Soundtrack - Sweet Mystery Galaxy.mp3`,
    `To the Gateway - Super Mario Galaxy.mp3`
]

var track = trackNames[Math.floor(Math.random()*trackNames.length)];
BGM.src = `assets/BGM/${track}`

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    if (keysPressed['z'] && event.key == 'x' || keysPressed['x'] && event.key == 'z') {
        flashGoToPage()
    } else if (event.key == 'z') {
        pressZX.src = "assets/titlescreen/ZGlow.svg";
    } else if (event.key == 'x') {
        pressZX.src = "assets/titlescreen/XGlow.svg";
    }
});

document.addEventListener('keyup', () => {
    keysPressed = {};
    pressZX.src = "assets/titlescreen/PressZX.svg";
});

flash.addEventListener("click", () => {
    flashGoToPage();
})

pressZX.addEventListener("click", () => {
    flashGoToPage();
})

function flashGoToPage() {
    if (loadingNextPage) return;
    localStorage.loadingNextPage = "true";
    loadingNextPage = true;
    pressZX.src = "assets/titlescreen/ZXGlow.svg";
    playSound('assets/SFX/start.mp3');
    fullFlash.classList.remove("hidden");

    setTimeout(function () {
        var pageToGo = "mainmenu.html";
        window.location.href = pageToGo;
    }, 1000)
}

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