function changeBackground(){
   let colors = [
    "white",
    "black",
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "purple"
];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}