window.onload = init;
let timerid;
function init() {
  bigger.onclick = onBiggerButtonClick;
  checkBling.onchange = onBlingCheck;
}

function onBiggerButtonClick() {
  if(!timerid) {
    timerid = setInterval(increasingFontSize, 500);
  }
}

function increasingFontSize() {
  if(!text.style.fontSize) {
    text.style.fontSize = "12pt";
  }
  let currentSize = parseInt(text.style.fontSize);
  text.style.fontSize = (currentSize  + 2) + "pt";
  
}

function onBlingCheck() {
  if(!checkBling.checked) {
    text.classList.remove("bold");
  } else {
    text.classList.add("bold");
  }
}