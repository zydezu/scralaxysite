const pressZX = document.getElementById("pressZX");
var keysPressed = {};
var titleHovered = 0;

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

pressZX.addEventListener("click", () => {
    flashGoToPage()
})

function spawnSparkle() {
    var img = document.createElement('img');
    img.src = 'assets/titlescreen/sparkle.svg';
    img.id = 'sparkle';
    img.style.top = random(25, 50) + "%";
    img.style.left = random(25, 75) + "%";
    document.getElementById('flash').appendChild(img);
    document.getElementById('sparkle').classList.add("sparkle");
    setTimeout(deleteSparkle, 1000);
}

function sparkle() {
    setInterval(spawnSparkle, random(650 - titleHovered, 1750 - titleHovered));
}

function deleteSparkle() {
    var elements = document.getElementsByClassName('sparkle');
    elements[0].remove();
}

function flashGoToPage() {
    pressZX.src = "assets/titlescreen/ZXGlow.svg";
    var pageToGo = "ideas/";
    window.location.href = pageToGo;
}