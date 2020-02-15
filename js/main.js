'use strict'

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');

let startTime;
let timeoutId;
let elapsedTime = 0;

function countUp(){
    
    // console.log(Date.now() - startTime); 
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}:${ms}`;
    timeoutId = setTimeout(() => { // timeoutId = setTimeout (() => ... douiu koto
        countUp(); 
    }, 10); //returns an ID (53)
};


function setButtonStateInitial (){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
}

function setButtonStateRunning (){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
}

function setButtonStateStop (){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
}
  
setButtonStateInitial();
 
start.addEventListener('click', () =>{
    if(start.classList.contains('inactive') === true){
        return; 
    };
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
});


stop.addEventListener('click', () =>{
    // timeoutId is a number like 53
    if(stop.classList.contains('inactive') === true){
        return; 
    };
   setButtonStateStop();
   clearTimeout(timeoutId); 
   elapsedTime += Date.now() - startTime; //wakaran
});

// 1. clearTimeout ();  (id) ga hitsuyou 
// 2. let timeoutId; tsukuru
// 3. timeoutId = setTimeout (() => ... setTimeout no kaeri chi ni settei

reset.addEventListener('click', () =>{
    if(reset.classList.contains('inactive') === true){
        return; 
    };
   setButtonStateInitial();
   timer.textContent = '00:00.000';
   elapsedTime = 0;
});