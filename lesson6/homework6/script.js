let imagesField = document.getElementById('buttonsContainer');

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
  let newImage = document.createElement('img');
  newImage.setAttribute('src', 'https://placeimg.com/440/280/any?random');
  newImage.setAttribute('class', 'image');
  imagesField.append(newImage);
}

function reload() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.src = 'https://placeimg.com/440/280/any?random=' + Math.random();
  });
}

const button = document.querySelector('button.next-images');
button.onclick = reload;

function togglePreview(event) {
  event.target.parentNode.classList.toggle("active");
  console.log(event.target.parentNode); 
}

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.onclick = togglePreview;
})