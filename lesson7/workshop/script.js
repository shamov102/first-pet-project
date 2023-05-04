function refresh() {
  document.querySelectorAll('img').forEach((image) => {
    image.src = "https://placeimg.com/440/280/any?random=" + Math.random();
    image.classList.add('loading');
  });
}


function zoomIn(event) {
  if (event.target.tagName === 'IMG') {
  const parent = event.target.parentElement;
  parent.classList.toggle("fullScreen");
  }
  if (event.target.classList.contains('fullScreen')) {
    event.target.classList.toggle('fullScreen');
  }
}

function init() {
  document.querySelector('.next-button').onclick = refresh;
  document.querySelector('.container').addEventListener('click', zoomIn);
  document.querySelectorAll('img').forEach((image) => {
    image.onload = (event) => event.target.classList.remove('loading');
  })
}


window.addEventListener('DOMContentLoaded', init);