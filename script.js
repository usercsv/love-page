document.getElementById("playBtn").addEventListener("click", function () {
    const lyrics = document.getElementById("lyrics");
    const player = document.getElementById("player");
  
    // убираем класс hidden
    lyrics.classList.remove("hidden");
    player.classList.remove("hidden");
  
    // задержка и плавное появление текста
    setTimeout(() => {
      lyrics.classList.add("visible");
    }, 500); // через полсекунды
  
    // автоматом прокрутка к тексту
    lyrics.scrollIntoView({ behavior: 'smooth' });
  });
  