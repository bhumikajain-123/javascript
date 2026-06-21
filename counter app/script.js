



let count = 0;

function increase(){
    count ++;
    document.getElementById("count").value = count;
}

function decrease(){
     count--;
    if(count < 0){
     
        reset();
    }
   
    document.getElementById("count").value = count;
}

function reset(){
    count = 0;
    document.getElementById("count").value = count;
}