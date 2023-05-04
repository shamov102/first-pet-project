function refresh() {
  const page = Math.floor(Math.random() * 40)

  fetch('https://picsum.photos/v2/list?page=' + page + '&limit=4')
    .then((response) => response.json())
    .then((data) => {
      document.querySelectorAll('.small-image').forEach((image, i) => {
        image.setAttribute('src', data[i].download_url);
        image.setAttribute('alt', data[i].author);
      });

      const bigImage = document.querySelector('.big-image');
      bigImage.src = data[0].download_url;
      document.querySelector('.photograph').textContent = data[0].author;
    })
}

function updateState() {
  refresh();
  updateImagesByTimer();
}

function updateImagesByTimer() {
  const updaterImages = setInterval(refresh, 4000);

  document.querySelector('.stop-button').onclick = () => clearInterval(updaterImages);
}


function init() {
  refresh();
  document.querySelector('.new-images').onclick = updateState;

  document.querySelectorAll(".small-image").forEach((image) => {
    image.onclick = function (event) {
      const bigImage = document.querySelector('.big-image');
      bigImage.src = event.target.src;
      document.querySelector('.photograph').textContent = event.target.alt;
    }
  });

  updateImagesByTimer();

};

window.addEventListener('DOMContentLoaded', init);