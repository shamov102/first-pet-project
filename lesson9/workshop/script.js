let time = 100;
let timerId;
let loadingCount = 2;
function updateTimer() {
  timerId = setTimeout(updateTimer, 10);
  time -= 0.1;
  if (time <= 0) {
    refresh();
  }
  document.querySelector('.progress').style.width = time + '%';
}

function refresh() {
  loadingCount = 2;
  time = 100;
  document.querySelector('.progress').style.width = time + '%';
  clearTimeout(timerId);
  const page = Math.floor(Math.random() * 400);
  fetch("https://picsum.photos/v2/list?page=" + page + "&limit=2")
  .then((response) => response.json())
  .then(data => {
    document.querySelectorAll('img').forEach((image, i) => {
      image.src = data[i].download_url;
      image.classList.add('loading');
      image.nextElementSibling.textContent = data[i].author;
    });
  });
}

function loaded(event) {
  loadingCount -= 1;
  if (loadingCount === 0) {
    updateTimer();
  }
  event.target.classList.remove("loading");
}


function zoomIn(event) {
  if (event.target.tagName === 'IMG') {
  const parent = event.target.parentElement;
  parent.classList.toggle("fullScreen");
  }
  if (event.target.classList.contains('image-container')) {
    event.target.classList.toggle('fullScreen');
  }
}

function init() {
  refresh();
  document.querySelector('.next-button').onclick = refresh;
  document.querySelector('.container').addEventListener('click', zoomIn);
  document.querySelectorAll('img').forEach((image) => {
    image.onload = loaded;
  })
}


window.addEventListener('DOMContentLoaded', init);




