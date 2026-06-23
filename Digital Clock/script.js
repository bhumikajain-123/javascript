  
  function showTime(){

  
  
  let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let result = `${hours} : ${minutes}:${seconds}`;

let show = document.getElementById("clock").innerText = result;

  }
  showTime();
setInterval(()=>{
showTime();
},1000);

