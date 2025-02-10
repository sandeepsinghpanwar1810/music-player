const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const musicFileInput = document.getElementById('musicFile');
const audioPlayer = document.getElementById('audioPlayer');
const songName = document.getElementById('c:\Users\sande\Desktop\MUSIC\Mohammad Aziz Ke Dard Bhare Nagme _ Hits of Mohammad Aziz _ Sad Song _ old songs hits hindi 90s_WmXJE1cdAMk.mp3');

// Event listener for file input to load the song
musicFileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        songName.textContent = "Loaded: " + file.name;
        enableControls();
    }
});

// Play button functionality
playBtn.addEventListener('click', () => {
    audioPlayer.play();
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
});

// Pause button functionality
pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = false;
});

// Stop button functionality
stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
});

// Enable controls after a file is loaded
function enableControls() {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
}
