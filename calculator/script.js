let display = document.getElementById("display");


function append(value){
    display.value += value;
     console.log(eval(display.value));
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    let result = eval(display.value);
    display.value = result;
}
