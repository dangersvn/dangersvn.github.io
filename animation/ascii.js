
var animatorModule = (function(){
  "use strict";
  const SPLITER = "=====\n";
  let frames;
  let curIndex = 0;
  let timerid;

  window.onload = function() {    
    startButton.onclick = animatorModule.onStartClick;
    stopButton.onclick = animatorModule.onStopClick;
    stopButton.disabled = true;
    
    animationSelection.onchange = animatorModule.onAnimationChanged; 
    sizeSelection.onchange = animatorModule.onSizeChanged; 
    turboCheck.onchange = animatorModule.onTurboCheck; 
  }
  
  function freezeUIs(isFreeze) {
    startButton.disabled = isFreeze;
    stopButton.disabled = !isFreeze;
    animationSelection.disabled = isFreeze;
  }
  
  function displayFrame() {
    if(frames) {
      textarea.value = frames[curIndex++];
      if(curIndex >= frames.length)  {
        curIndex = 0;
      }
    }
  }

  function onStartClick() {  
    frames =  textarea.value.split(SPLITER);
    if(!frames || frames.length <= 1) return;
    console.log("Start animation.")
    if(timerid) {
      timerid = setInterval(displayFrame, turboCheck.checked ? 50 : 250);
    }
    freezeUIs(true);
  }
  
  function onStopClick() {
    curIndex = 0;
    removeInterval();
    textarea.value = frames.join(SPLITER);
    freezeUIs(false);
    console.log("Stop animation.")
  
  }

  function onAnimationChanged() {  
    textarea.value = ANIMATIONS[animationSelection.value];
    removeInterval();
  }
  
  function removeInterval() {
    timerid && clearInterval(timerid);
  }
  
  function onSizeChanged() {
    textarea.style.fontSize = sizeSelection.value;
  }
  
  function onTurboCheck() {
    removeInterval();
  
    if(turboCheck.checked) {
      timerid = setInterval(displayFrame, 50);
    } else {
      timerid = setInterval(displayFrame, 250);
    }
  }

  return {onStartClick, onStopClick, onAnimationChanged, onSizeChanged, onTurboCheck}
})();
