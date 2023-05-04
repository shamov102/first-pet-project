let targetUnit = prompt("Введите единицу измерения (c или f)");
let value = prompt("Введите значение");

if (targetUnit === 'f') {
  let cval = (+value - 32) * 5 / 9;
  if (cval >= 30) {
    alert("It is hot outside");
  } else if (cval >= 20 && cval < 30) { 
    alert("It is warm outside");
  } else {
    alert("It is cold outside");
  }
} else if (targetUnit === 'c') {
  if (value >= 30) 
    alert("It is hot outside");
  else if (value >= 20 && value < 30) { 
    alert("It is warm outside");
  } else {
    alert("It is cold outside");
  }
  }
