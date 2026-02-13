const correctPassword = "182700";
const music = document.getElementById("bgMusic");
const volumeSlider = document.getElementById("volumeSlider");

music.volume = 0.25;

window.playSong = function (card, songFile) {

  // Remove active highlight from all
  document.querySelectorAll(".song-card")
    .forEach(c => c.classList.remove("active-song"));

  // Highlight selected
  card.classList.add("active-song");

  // Change song
  music.src = songFile;
  music.play();
};

volumeSlider.addEventListener("input", function () {
  music.volume = this.value;
});


function checkPassword() {
  const entered = document.getElementById("password").value;

  if (entered === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("welcome").style.display = "flex";

    // Start music
    music.volume = 0;
    music.play();

    let volume = 0;
    let fade = setInterval(() => {
      if (volume < 0.2) {
        volume += 0.05;
        music.volume = volume;
      } else {
        clearInterval(fade);
      }
    }, 200);

    setTimeout(() => {
      document.getElementById("welcome").style.display = "none";
      document.getElementById("main").style.display = "block";
    }, 2500);

  } else {
    document.getElementById("error").innerText = "Wrong password baby 🥺";
  }
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

function toggleLetter(card) {
  card.classList.toggle("active");
}

function toggleMusic() {
  if (music.paused) {
    music.volume = 0.20; // 25% volume
    music.play();
  } else {
    music.pause();
  }
}
