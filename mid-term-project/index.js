const story = {
    start: {
        text: "You have landed on a mysterious alien planet. Do you explore the glowing forest or the strange rock formations?",
        choices: ["Explore the forest", "Investigate rock formations"],
        consequence: ["forest", "rocks"],
        image: "images/explore_forest.jpg"
    },
    forest: {
        text: "In the forest, you encounter a glowing alien creature. Do you approach it or hide behind a tree?",
        choices: ["Approach", "Hide"],
        consequence: ["approach", "hide"],
        image: "images/alien_creature.jpg"
    },
    rocks: {
        text: "Among the rocks, you find a strange device. Do you activate it or leave it alone?",
        choices: ["Activate", "Leave"],
        consequence: ["activate", "leave"],
        image: "images/strange_device.jpg"
    },
    approach: {
        text: "The alien creature is friendly and gives you a rare gem. You won!",
        choices: ["Play again", "Quit"],
        consequence: ["start", "end"],
        image: "images/alien_gem.jpg"
    },
    hide: {
        text: "You hide, but the creature spots you and vanishes. Your adventure is over.",
        choices: ["Play again", "Quit"],
        consequence: ["start", "end"],
        image: "images/you_hide.jpg"
    },
    activate: {
        text: "The device activates a portal, and you step through to find treasure. You won!",
        choices: ["Play again", "Quit"],
        consequence: ["start", "end"],
        image: "images/you_win.jpg"
    },
    leave: {
        text: "You leave the device alone and walk back to your ship. Your adventure ends.",
        choices: ["Play again", "Quit"],
        consequence: ["start", "end"],
        image: "images/end_game.jpg"
    },
    end: {
        text: "Game Over!",
        choices: [],
        consequence: [],
        image: "images/gameover.jpg"
    }
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story").textContent = stage.text;
    document.getElementById("image-container").innerHTML = `<img src="${stage.image}" alt="image">`;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => choose(stage.consequence[index]));
        choicesDiv.appendChild(button);
    });
}

function choose(nextStage) {
    currentStage = nextStage;
    if (nextStage === "end") {
        endGame();
    } else {
        updatePage();
    }
}

function endGame() {
    const stage = story.end;
    document.getElementById("story").textContent = stage.text;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("image-container").innerHTML = `<img src="${stage.image}" alt="game over image">`;
}

window.onload = startGame;
