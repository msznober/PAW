var boomSound;
var clapSound;
var hihatSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var playRecord = [];
appStart();
function appStart() {
    document.addEventListener("keypress", onKeyPress);
    var btnplayRecord = document.querySelector('#playRecord');
    btnplayRecord.addEventListener('click', onChannel1Play);
    getAudioTags();
}
function onChannel1Play() {
    playRecord.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioTags() {
    boomSound = document.querySelector("#boom");
    clapSound = document.querySelector("#clap");
    hihatSound = document.querySelector("#hihat");
    kickSound = document.querySelector("#kick");
    openhatSound = document.querySelector("#openhat");
    rideSound = document.querySelector("#ride");
    snareSound = document.querySelector("#snare");
    tinkSound = document.querySelector("#tink");
    tomSound = document.querySelector("#tom");
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    playRecord.push({ key: key, time: time });
    playSound(key);
    console.log(playRecord);
}
function playSound(key) {
    switch (key) {
        case '1':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case '2':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case '3':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case '4':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case '5':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case '6':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case '7':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case '8':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case '9':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
}
