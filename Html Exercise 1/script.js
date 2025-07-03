
document.querySelectorAll(".tour-video").forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // Reset to start
  });
});

document.querySelectorAll(".audios").forEach((audio) => {
  audio.addEventListener("mouseenter", () => {
    audio.play();
  });

  audio.addEventListener("mouseleave", () => {
    audio.pause();
    audio.currentTime = 0; // Reset to start
  });
});
