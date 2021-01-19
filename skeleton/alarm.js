document.body.onload = init;
let timerid;
function init() {
  min.value = 0;
  sec.value = 60;
  go.innerHTML = "Go";
  go.onclick = goButtonClick;

}


function goButtonClick() {
  document.body.classList.remove("alarm");
  if(go.innerHTML == "Stop") {
    clearInterval(timerid);
    freezeUIs(false);
    init();
    return;
  }
  let totalMin = +min.value;
  let totalSec = +sec.value;
  // validate
  if(Number.isNaN(totalMin) || Number.isNaN(totalSec) 
  || totalMin < 0 || totalSec <= 0 || totalSec > 60) {
    alert("Make sure to input invalid value of minutes and seconds.");
    return;
  }
  
  freezeUIs(true);
  go.innerHTML = "Stop";
  timerid = setInterval(() => {
    sec.value = --totalSec;
    if(totalSec == 0) {
      if(totalMin > 0) {
        min.value = --totalMin;
        totalSec = 60;
      } else {
        // end
        clearInterval(timerid);
        freezeUIs(false);
        init();
        document.body.classList.add("alarm");
        console.log("Alarm!!!");
      }
    }
  },1000)
  console.log("Go btn clicked!");
}

function freezeUIs(isFreeze) {
  min.disabled = isFreeze;
  sec.disabled = isFreeze;
  // go.disabled = isFreeze;

}
