var numOfDrums = document.querySelectorAll(".drum").length;


for (i = 0; i < numOfDrums; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

var isAudioPlaying = false;


document.querySelector(".g").addEventListener("click", function () {
    if (!isAudioPlaying) {
        var music = new Audio("./sounds/roll.mp3")
        music.play();
        isAudioPlaying = true;
        music.addEventListener("ended", function () {
            isAudioPlaying = false;
        });
    }
})


document.addEventListener("keydown", function (evt) {
    var KeysToPlayAudio = ["q", "e", "r", "t", "y", "u", "i", "o", "p", "f", "g", "h", ";", "'", "z", "x", "v", "b", "n", "m"];
    if (!isAudioPlaying && KeysToPlayAudio.includes(evt.key)) {
        var music = new Audio("./sounds/roll.mp3")
        music.play();
        isAudioPlaying = true;
        music.addEventListener("ended", function () {
            isAudioPlaying = false;
        });
    }
});


document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();

            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        //case "g":

        //var rickroll = new Audio("./sounds/roll.mp3");
        // rickroll.play();
        //roll();//
        //setTimeout(function () {
        //roll();
        //}, 10000);
        //break;

        default:
            console.log("ok")
        //function roll() {
        //var rickroll = new Audio();
        //     rickroll.play();
        //   }
        //    roll();
        //   setTimeout(function () {
        //         roll();
        // ) }, 1000);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}


// var audio = new Audio("./sounds/tom-1.mp3");
//         audio.play();