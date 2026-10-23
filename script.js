
function startQuiz() {

    document.querySelector(".page-one").style.display = "none";

    document.querySelector(".question-one").style.display = "block";

}


function checkAnswerOne(button, correct) {

    if (correct) {

        goToQuestionTwo();

    } else {

        button.classList.add("wrong");

        document.querySelector("#error-one").textContent =
            "Wrong answer! Try again.";

    }

}

function goToQuestionTwo() {

    document.querySelector(".question-one").style.display = "none";

    document.querySelector(".question-two").style.display = "block";

}


function checkAnswerTwo(button, correct) {

    if (correct) {

        goToQuestionThree();

    } else {

        button.classList.add("wrong");

        document.querySelector("#error-two").textContent =
            "Wrong answer! Try again.";

    }

}

function goToQuestionThree() {

    document.querySelector(".question-two").style.display = "none";

    document.querySelector(".question-three").style.display = "block";

}


function checkAnswerThree(button, correct) {

    if (correct) {

        goToQuestionFour();

    } else {

        button.classList.add("wrong");

        document.querySelector("#error-three").textContent =
            "Wrong answer! Try again.";

    }

}

function goToQuestionFour() {

    document.querySelector(".question-three").style.display = "none";

    document.querySelector(".question-four").style.display = "block";

}


function checkAnswerFour(button, correct) {

    if (correct) {

        goToQuestionFive();

    } else {

        button.classList.add("wrong");

        document.querySelector("#error-four").textContent =
            "Wrong answer! Try again.";

    }

}

function goToQuestionFive() {

    document.querySelector(".question-four").style.display = "none";

    document.querySelector(".question-five").style.display = "block";

}


function checkAnswerFive(button, correct) {

    if (correct) {

        showBirthdayMessage();

    } else {

        button.classList.add("wrong");

        document.querySelector("#error-five").textContent =
            "Wrong answer! Try again.";

    }

}

function showBirthdayMessage() {

    document.querySelector(".question-five").style.display = "none";

    document.querySelector(".birthday-page").style.display = "block";

    createConfetti();

}


function createConfetti() {

    const container = document.querySelector("#confetti-container");

    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "%";

        piece.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 85%, 60%)";

        piece.style.animationDelay =
            Math.random() * 1.2 + "s";

        piece.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        container.appendChild(piece);

    }

}
