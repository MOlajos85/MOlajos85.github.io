let ftInput = document.querySelector("#ftInput");
let inInput = document.querySelector("#inInput");
let mtOutput = document.querySelector("#mtOutput");
let cmOutput = document.querySelector("#cmOutput");
let calcBtn = document.querySelector("#calculate");

calcBtn.addEventListener("click", showRes);
ftInput.addEventListener("click", hideFt);
inInput.addEventListener("click", hideIn);

function hideFt() {
  ftInput.value = "";
}
function hideIn() {
  inInput.value = "";
}

function showRes() {
  let ftVal = +ftInput.value;
  let inVal = +inInput.value;
  ftVal = isNaN(ftVal) ? 0 : ftVal;
  inVal = isNaN(inVal) ? 0 : inVal;
  if (ftVal <= 0 && inVal <= 0) {
    alert(123);
  } else {
    calcRes(ftVal, inVal);
  }
}

function calcRes(ftVal, inVal) {
  let combined = ftVal * 0.3048 + inVal * 0.0254;
  mtOutput.value = Math.floor(ftVal * 0.3048 + inVal * 0.0254);
  cmOutput.value = ((combined % 1) * 100).toFixed(2);
  if (mtOutput.value <= 0) {
    mtOutput.value = "";
  }
}
