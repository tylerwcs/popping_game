document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById("game-board");
    const scoreValue = document.getElementById("score-value");
    let score = 0;

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * (window.innerWidth - 50) + "px";
        bubble.style.top = Math.random() * (window.innerHeight - 50) + "px";

        bubble.addEventListener("click", function() {
            popBubble(bubble);
        });

        gameBoard.appendChild(bubble);
        setTimeout(function() {
            bubble.remove();
            createBubble();
        }, 2000); // Adjust bubble spawn time here
    }

    function popBubble(bubble) {
        bubble.classList.add("popped");
        setTimeout(function() {
            bubble.remove();
        }, 200); // Adjust bubble popping animation time here
        score++;
        scoreValue.textContent = score;
    }

    createBubble();
});
