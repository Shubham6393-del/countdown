const start = document.getElementById("start");
const reset = document.getElementById("reset");

let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

let starttimer= null;

function timer(){
    if(hour.value == 0 && min.value == 0 && sec.value == 0){
        hour.value = 0;
        sec.value = 0;
        min.value = 0;
    }
    else if(sec.value !=0){
        sec.value--;
    }
    else if(min.value !=0 && sec.value == 0){
        sec.value = 59;
        min.value--;
    }
    else if(hour.value !=0 && min.value == 0){
        min.value = 60;
        hour.value--;

    }
  return;
};

function stopTimer(){
    clearInterval(starttimer);
};


start.addEventListener('click', function(){
  function startInterval(){
    starttimer = setInterval(function(){
        timer();
    },1000);
  }
  startInterval()
});


reset.addEventListener('click', function(){
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
 return;
});