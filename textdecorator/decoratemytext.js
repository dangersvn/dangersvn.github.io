window.onload = init;

function init() {
  bigger.onclick = onBiggerButtonClick;
  checkBling.onchange = onBlingCheck;
}

function onBiggerButtonClick() {
  setInterval(increasingFontSize, 500);
}

function increasingFontSize() {
  if(!text.style.fontSize) {
    text.style.fontSize = "12pt";
  }
  let currentSize = parseInt(text.style.fontSize);
  console.log(currentSize);
  console.log((currentSize  + 2) + "pt");
  text.style.fontSize = (currentSize  + 2) + "pt";
  
}

function onBlingCheck() {
  if(!checkBling.checked) {
    text.classList.remove("bold");
  } else {
    text.classList.add("bold");
  }
}