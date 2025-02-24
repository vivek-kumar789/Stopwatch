var btn = document.querySelector("#btn");
var isStop = true;
let timer = null; // for storing timeout, beacause we have to clear the timeout also during stop()
var sec = 0;
var min = 0;
var hr = 0;

const Start = () => {
  if (isStop == true) {
    isStop = false;
    startTimer();
  }
};

const startTimer = () => {
  if (isStop) return; // this is called base case. Generally, we use it on recursions. It stops the function for further execution if the isStop gets true.
  
  timer = setTimeout(() => { // store timeout in 'timer'
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
    
    if (min == 60) {
      min = 0;
      hr++;
    }
    
    // use the 'ternary operator'
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    display.innerHTML = hr + " : " + min + " : " + sec;
    
    startTimer(); // this is called recursive calls
  }, 1000);
  
};

const stop = () => {
  isStop = true;
  clearTimeout(timer); // also clear the timeout
};

const reset = () => {
  stop(); // simply calling stop
  
  sec = 0;
  hr = 0;
  min = 0;
  display.innerHTML = "00 : 00 : 00";
  btn.value = "Start";
};


const startStop = () => {
  if (btn.value === "Start")
  {
    Start();
    btn.value = "Stop";
  }
  else {
    stop();
    btn.value = "Start";
  }
}
