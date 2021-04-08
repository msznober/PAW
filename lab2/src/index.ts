let boomSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

const playRecord: any[] = [];

appStart();
function appStart(): void {
  document.addEventListener("keypress", onKeyPress);
  const btnplayRecord = document.querySelector('#playRecord');
  btnplayRecord.addEventListener('click', onChannel1Play);
  getAudioTags();
}

function onChannel1Play() {
  playRecord.forEach(sound => {
    setTimeout(() => playSound(sound.key), sound.time);
  })
}

function getAudioTags(): void {
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

function onKeyPress(ev: KeyboardEvent): void {
  const key = ev.key;
  const time = ev.timeStamp;


  playRecord.push({ key, time })

  playSound(key);

  console.log(playRecord)
}

function playSound(key: string): void {
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