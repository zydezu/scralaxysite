function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let keysPressed = {};
var titleHovered = 0;


document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    if (keysPressed['z'] && event.key == 'x' || keysPressed['x'] && event.key == 'z') {
        document.getElementById("pressZX").src = "assets/titlescreen/ZXGlow.svg";
        var pageToGo = "blog.html";
        window.location.href = pageToGo;
    } else if (event.key == 'z'){
        document.getElementById("pressZX").src = "assets/titlescreen/ZGlow.svg";
    } else if (event.key == 'x'){
        document.getElementById("pressZX").src = "assets/titlescreen/XGlow.svg";
    }
});
document.addEventListener('keyup', (event) => {
    keysPressed = {};
    document.getElementById("pressZX").src = "assets/titlescreen/PressZX.svg";
 });

function spawnSparkle() {
    var img = document.createElement('img');
    img.src = 'assets/titlescreen/sparkle.svg';
    img.id = 'sparkle';
    img.style.top = random(25,50) + "%";
    img.style.left = random(25,75) + "%";
    document.getElementById('flash').appendChild(img);
    document.getElementById('sparkle').classList.add("sparkle");
    setTimeout(deleteSparkle, 1000);
}

function sparkle(){
    setInterval(spawnSparkle, random(650 - titleHovered, 1750 - titleHovered));
}

function deleteSparkle(){
    var elements = document.getElementsByClassName('sparkle');
    elements[0].remove();
}