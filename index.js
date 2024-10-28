// Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML; // Corrected to innerHTML
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// Detecting keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var sound1 = new Audio("assets/sound1.mp3");
            sound1.play();
            break;
        case "a":
            var sound2 = new Audio("assets/sound2.mp3");
            sound2.play();
            break;
        case "s":
            var sound3 = new Audio("assets/sound3.mp3");
            sound3.play();
            break;
        case "d":
            var sound4 = new Audio("assets/sound4.mp3");
            sound4.play();
            break;
        case "j":
            var snare = new Audio("assets/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("assets/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("assets/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);  // Log key if not recognized
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    
    if (activeButton) {  // Check if the button exists
        activeButton.classList.add("pressed");
        
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
