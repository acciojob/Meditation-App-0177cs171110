//your JS code here. If required.

  
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const videoPlayer = document.getElementById("videoPlayer");
  const audioPlayer = document.getElementById("audioPlayer");
  const beachSoundBtn = document.getElementById("beachSound");
  const rainSoundBtn = document.getElementById("rainSound");
  const playPauseBtn = document.getElementById("playPause");
  const timeDisplay = document.querySelector(".time-display");

  let timer;
  let totalTime = 600; // 10 minutes in seconds
  let currentTime = totalTime;

  function updateTimeDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function startTimer(duration) {
    currentTime = duration;
    timer = setInterval(() => {
      currentTime--;
      if (currentTime < 0) {
        clearInterval(timer);
        playPauseBtn.textContent = "Play";
        currentTime = totalTime;
        updateTimeDisplay();
      } else {
        updateTimeDisplay();
      }
    }, 1000);
  }

  function switchSound(soundSrc) {
    audioPlayer.src = `sounds/${soundSrc}.mp3`;
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    }
  }

  beachSoundBtn.addEventListener("click", () => {
    switchSound("beach");
  });

  rainSoundBtn.addEventListener("click", () => {
    switchSound("rain");
  });

  playPauseBtn.addEventListener("click", () => {
    if (videoPlayer.paused && audioPlayer.paused) {
      videoPlayer.play();
      audioPlayer.play();
      playPauseBtn.textContent = "Pause";
      startTimer(currentTime);
    } else {
      videoPlayer.pause();
      audioPlayer.pause();
      playPauseBtn.textContent = "Play";
      clearInterval(timer);
    }
  });

  document.getElementById("smaller-mins").addEventListener("click", () => {
    totalTime = 120; // 2 minutes in seconds
    currentTime = totalTime;
    updateTimeDisplay();
  });

  document.getElementById("medium-mins").addEventListener("click", () => {
    totalTime = 300; // 5 minutes in seconds
    currentTime = totalTime;
    updateTimeDisplay();
  });

  document.getElementById("long-mins").addEventListener("click", () => {
    totalTime = 600; // 10 minutes in seconds
    currentTime = totalTime;
    updateTimeDisplay();
  });
});
