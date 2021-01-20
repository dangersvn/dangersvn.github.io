'use strict';
window.onload = function(){
  let text = document.getElementById("text");
  let checkBling = document.getElementById("checkBling");
  
  decorateModule.init(text,checkBling);

  bigger.onclick = decorateModule.biggerButtonHandler;
  checkBling.onchange = decorateModule.blingCheckHandler;
}

var decorateModule = (function() {
  let timerid;
  var text;
  var checkBling;
  function init(textbox, check) {
    if(!textbox || !check) {
      throw Error("Invalid bindings id to html elements. Required 'text' as id for textbox, and 'checkBling' as id for checkbox");
    }
    text = textbox;
    checkBling = check;
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
  return {init: init, biggerButtonHandler: onBiggerButtonClick, blingCheckHandler: onBlingCheck}
})();