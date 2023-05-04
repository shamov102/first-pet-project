// video 1 - timers

/* function setTime() {
  const time = new Date();
  document.querySelector('.time-container').textContent = time.toLocaleTimeString();
  setTimeout(setTime, 1000);
}
setTime(); */

// video 2 - promise

/* const PromiseOne = new Promise((resolve, reject) => {
  setTimeout(() =>  resolve('ok'), 1000)
})
PromiseOne.then((data) => {
  console.log(PromiseOne);
  console.log(data);
})

console.log(PromiseOne); */
/* 
const PromiseOne = new Promise((resolve, reject) => {
  setTimeout(() =>  reject('nok'), 1000)
})
PromiseOne
.then((data) => {
  console.log(PromiseOne);
  console.log(data);
})
.catch((error) => {
  console.log(PromiseOne);
  console.log(error);
})

console.log(PromiseOne); */


/* function getRandom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.floor(Math.random() * 100)), 1000);
  }); 
}

getRandom()
      .then((data) => {
        console.log(data);
        return getRandom();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      }) */


// video 3 - сетевые запросы (fetch)

// get запрос
/* function loadTodo() {
  document.querySelector('.loading').textContent = "loading";
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
  document.querySelector('.loading').textContent = "";
      document.querySelector('.todo').textContent = data.title;
    });
}
loadTodo(); */

// -------------------------
// post запрос

/* function send() {
  const value = document.querySelector('input').value
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: "POST",
    body: JSON.stringify({ title: value }),
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    }
  })
  .then((response) => response.json())
  .then(data => {
    document.querySelector('div').textContent = data.title;
  }); 
}
document.querySelector('button').addEventListener('click', send); */

// -----------------------
// XMLHttpRequest

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplacehoder.typicode.com/todos/1");
xhr.onload = () => {
  console.log(xhr.status);
  console.log(JSON.parse(xhr.response));
}
xhr.onerror = (err) => {
  console.log(err);
}
xhr.send()