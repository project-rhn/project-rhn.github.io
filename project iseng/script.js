document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  // Memulai pemutaran audio secara otomatis
  var audioPlayer = document.getElementById('audio-player');
  audioPlayer.play();

  // Mengubah ikon tombol menjadi pause saat memulai pemutaran otomatis
  var playButton = document.querySelector('.play-button');
  var pauseButton = document.querySelector('.pause-button');
  playButton.style.display = 'none';

  // Memulai ulang pemutaran saat musik selesai
  audioPlayer.addEventListener('ended', function() {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
  });

  playButton.addEventListener('click', function() {
    // Memeriksa status pemutaran audio
    if (audioPlayer.paused) {
      // Melanjutkan pemutaran audio
      audioPlayer.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
    }
  });

  pauseButton.addEventListener('click', function() {
    // Memberhentikan pemutaran audio
    audioPlayer.pause();
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
  });
});
