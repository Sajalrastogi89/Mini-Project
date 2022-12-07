let count1 = 0; let count2 = 0; let id1; let id2; let resultId;
let x = document.getElementById("first");
const slideshowdiv = document.querySelectorAll("#bg-image div");

const nextImagewait = 4000;
let currentImage = 15;
slideshowdiv[currentImage].style.opacity = 1;

setInterval(nextImage, nextImagewait);
function nextImage() {
    slideshowdiv[currentImage].style.opacity = 0;
    currentImage = (currentImage + 1) % (slideshowdiv.length);

    slideshowdiv[currentImage].style.opacity = 1;
    if ((currentImage >= 0 && currentImage < 5) || (currentImage > 19 && currentImage <= 24)) {
        changeColor();

    }
    else {
        originalColor();
    }
}

function changeColor() {

    x.style.color = "#fff";
}
function originalColor() {
    x.style.color = "#000";
}
let y;
function Stone() {
    restrict();
    document.getElementById("stone1").style.marginLeft = "20%";



    id1 = "stone1";
    y = randomNumber();
    decisionStone(y);
}
function Paper() {
    restrict();
    document.getElementById("paper1").style.marginLeft = "20%";
    id1 = "paper1";
    y = randomNumber();
    decisionPaper(y);
}
function Scissor() {
    restrict();
    document.getElementById("scissor1").style.marginLeft = "20%";
    id1 = "scissor1";
    y = randomNumber();
    decisionScissor(y);
}
function randomNumber() {
    let a = Math.floor(Math.random() * 3);
    computerDecision(a);
    return a;

}
function computerDecision(b) {
    switch (b) {
        case 0:
            document.getElementById("stone2").style.marginRight = "20%";
            id2 = "stone2";
            break;
        case 1:
            document.getElementById("paper2").style.marginRight = "20%";
            id2 = "paper2"
            break;
        case 2:
            document.getElementById("scissor2").style.marginRight = "20%";
            id2 = "scissor2";
            break;
    }
}

function decisionStone(d) {
    switch (d) {
        case 0:
            result("draw");

            break;
        case 1:
            result("lost");
            computer();
            break;
        case 2:

            result("won");
            user();
    }
}
function decisionPaper(d) {
    switch (d) {
        case 0:
            result("won");
            user();
            break;
        case 1:
            result("draw");


            break;
        case 2:
            result("lost");
            computer();
    }
}
function decisionScissor(d) {
    switch (d) {
        case 0:
            result("lost");
            computer();
            break;
        case 1:
            result("won");
            user();
            break;
        case 2:

            result("draw");

    }

}
function user() {
    document.getElementById("item-1").innerHTML = ++count1;

}
function computer() {
    document.getElementById("item-2").innerHTML = ++count2;

}

function result(idToChange) {
    resultId = idToChange;
    document.getElementById(idToChange).style.display = "block";
}

function defaultLocation() {
    document.getElementById(id1).style.marginLeft = 0;
    document.getElementById(id2).style.marginRight = 0;

    document.getElementById(resultId).style.display = "none";
    unrestrict();
    if (count1 == 3) {
        document.getElementById("congrats").style.display = "block";
        disable();
    }
    else if (count2 == 3) {
        document.getElementById("sorry").style.display = "block";
        disable();
    }
}
const buttonNode = document.querySelectorAll("button");

function disable() {
    for (let i = 1; i < 5; i++) {
        buttonNode[i].disabled = true;
    }
}
function restrict() {
    for (let i = 1; i < 4; i++) {
        buttonNode[i].disabled = true;
    }
}
function unrestrict() {
    for (let i = 1; i < 4; i++) {
        buttonNode[i].disabled = false;
    }
}
setInterval(()=>{
alert("You've been playing for about ten minutes.");
},600000);
