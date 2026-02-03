const circle = document.getElementById("circle");

circle.addEventListener("mouseover", () => {
    circle.style.animationPlayState = "paused";
});

circle.addEventListener("mouseout", () => {
    circle.style.animationPlayState = "running";
});