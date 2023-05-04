let imagesField = document.querySelector('.images-container');

let removeImage = document.getElementById("removeImage");
removeImage.onclick = function() {
  imagesField.lastElementChild.remove();

  if (imagesField.getElementsByClassName('image').length == 1) {
    removeImage.setAttribute('style', 'background-color: grey');
    removeImage.disabled = true;
  }
}

let addImage = document.getElementById("addImage");
addImage.onclick = function() {
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  let newImage = document.createElement('img');
  newImage.setAttribute('src', 'https://placeimg.com/440/280/any?random');
  newImage.setAttribute('class', 'image');
  overlay.append(newImage);
  imagesField.append(overlay);
}

function reload() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.src = 'https://placeimg.com/440/280/any?random=' + Math.random();
  });
}

const button = document.querySelector('button.new-images');
button.onclick = reload;

function zoomIn(event) {
  if (event.target.tagName === 'IMG') {
    event.target.parentNode.classList.toggle("active");
  }
  if (event.target.classList.contains('active')) {
    event.target.classList.toggle("active");
  }

}

document.querySelector('.images-container').addEventListener('click', zoomIn);