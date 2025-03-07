// console.log("Fortune Teller Game Loaded");

document.addEventListener("DOMContentLoaded", function() {
    let fortunes = [
        // "You will have a lucky day!",
        // "An exciting opportunity is coming your way.",
        // "A surprise gift is in your future.",
        // "Something unexpected will bring you joy.",
        // "Your dreams are closer than you think.",
        // "You will receive good news very soon!",
        // "A great adventure awaits you!",
        // "The love of your life will appear in front of you unexpectedly!",
        // "You have a secret admirer.",
        // "The love of your life is right in front of your eyes.",
        // "Do what you love. The rest will fall into place.",
        "angie is your girlfriend",

    ];

    let stage = document.querySelector("#fortune-teller");
    let colorStage = document.querySelector("#color-stage");
    let fortuneDisplay = document.querySelector("#fortune-display");
    let fortuneText = document.querySelector("#fortune-text");

    document.querySelectorAll(".number").forEach(function(button) {
        button.addEventListener("click", function() {
            console.log("Number selected: ", button.dataset.value);
            stage.style.display = "none";
            colorStage.style.display = "grid";
        });
    });

    // Color selection 
    document.querySelectorAll(".color").forEach(function(button) {
        button.addEventListener("click", function() {
            console.log("Color selected: ", button.dataset.color);
            
            
            document.querySelectorAll(".color").forEach(colorButton => {
                colorButton.style.visibility = "hidden";
            });
            
            setTimeout(() => {
                colorStage.style.display = "none";
                fortuneDisplay.style.display = "block";
                let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
                fortuneText.textContent = randomFortune;
            }, 500);
        });
    });
});
