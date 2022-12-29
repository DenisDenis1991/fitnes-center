const videoPlay = document.querySelector('.video');
const videoLink = document.querySelector('.video__link');
videoPlay.addEventListener('click', () => {
  videoLink.removeAttribute('href');
  videoPlay.innerHTML = `<video poster="img/main/gym-preview.jpg" width="364" height="228" preload="none">
  <source src="media/about-video.webm" type="video/webm">
  <source src="media/about-video.mp4" type="video/mp4">
</video>`;
});
