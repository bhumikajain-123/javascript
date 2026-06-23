let randomNumber = Math.floor(Math.random() * 10) + 1;

let score = 0;
let attempts = 0;
let maxAttempts = 5;

console.log(randomNumber);

function append(value){

    attempts++;
    document.getElementById("attempts").innerText = attempts;

    let message = document.getElementById("Message");

        if(attempts >= maxAttempts){

        message.innerText = "💀 Game Over! Number was " + randomNumber;
        message.style.color = "black";

        // restart game
        randomNumber = Math.floor(Math.random() * 10) + 1;
        attempts = 0;

        console.log("New Number:", randomNumber);
        return; // STOP function here
    }

    if(value < randomNumber){

        message.innerText = "Too Low";
        message.style.color = "orange";

    }else if(value > randomNumber){

        message.innerText = "Too High";
        message.style.color = "red";

    }else{

        score++;
        document.getElementById("score").innerText = score;

        message.innerText = "🎉 Winner!";
        message.style.color = "green";
    }
}