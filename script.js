     // JavaScript for mobile menu toggle
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menu-toggle');

    burgerIcon.addEventListener('click', () => {
      menu.classList.toggle('show');
      burgerIcon.classList.toggle('open');
    });

    // Close the menu when a menu item is clicked
    menu.addEventListener('click', () => {
      menu.classList.remove('show');
      burgerIcon.classList.remove('open');
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
