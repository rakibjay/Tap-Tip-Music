window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];

   
    //Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

  // create a funtion that makes bubbles
   const createBubbles = (index) => {
       const bubble = document.createElement("div");          // create element
       visual.appendChild(bubble);                           // visual add with bubblle
       bubble.style.backgroundColor = colors[index];        // FORMULA :: element.style.property = new style
       bubble.style.animation = "jump 1s ease";
       bubble.addEventListener('animationend', function(){
           visual.removeChild(this);
       });
   };
});

