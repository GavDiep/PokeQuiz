// Pokemon quiz

// Variables

let input1 = document.getElementById("qst1");
let input2 = document.getElementById("qst2");
let input3 = document.getElementById("qst3");
let input4 = document.getElementById("qst4");
let input5 = document.getElementById("qst5");
let input6 = document.getElementById("qst6");
let outputEl = document.getElementById("answers");
let responseEl = document.getElementById("textOutput");

// Correct/Incorrect variables

let true1 = document.getElementById("correct1");
let true2 = document.getElementById("correct2");
let true3 = document.getElementById("correct3");
let true4 = document.getElementById("correct4");
let true5 = document.getElementById("correct5");
let true6 = document.getElementById("correct6");

// Counting variable

let numCorrect = 0;

// event listener and function

document.getElementById("btnEl").addEventListener("click", markQuiz);

function markQuiz() {
  if (numCorrect < 6) {
    if (
      input1.value.toLowerCase() == "squirtle" ||
      input1.value.toLowerCase() == "tiny turtle pokemon"
    ) {
      numCorrect++;
      true1.innerHTML = "CORRECT";
      true1.style.color = "lightGreen";
      input1.style.border = "6px solid lightGreen";
    } else {
      true1.innerHTML = "INCORRECT";
      true1.style.color = "red";
      input1.style.border = "4px solid red";
      console.log("incorrect1");
    }

    if (
      input2.value.toLowerCase() == "pikachu" ||
      input2.value.toLowerCase() == "captain pikachu" ||
      input2.value.toLowerCase() == "mouse pokemon"
    ) {
      numCorrect++;
      true2.innerHTML = "CORRECT";
      true2.style.color = "lightGreen";
      input2.style.border = "6px solid lightGreen";
    } else {
      true2.innerHTML = "INCORRECT";
      true2.style.color = "red";
      input2.style.border = "4px solid red";
      console.log("incorrect2");
    }

    if (
      input3.value.toLowerCase() == "diglett" ||
      input3.value.toLowerCase() == "mole pokemon"
    ) {
      numCorrect++;
      true3.innerHTML = "CORRECT";
      true3.style.color = "lightGreen";
      input3.style.border = "6px solid lightGreen";
    } else {
      true3.innerHTML = "INCORRECT";
      true3.style.color = "red";
      input3.style.border = "4px solid red";
      console.log("incorrect3");
    }

    if (
      input4.value.toLowerCase() == "giratina" ||
      input4.value.toLowerCase() == "devil pokemon" ||
      input4.value.toLowerCase() == "renegade pokemon"
    ) {
      numCorrect++;
      true4.innerHTML = "CORRECT";
      true4.style.color = "lightGreen";
      input4.style.border = "6px solid lightGreen";
    } else {
      true4.innerHTML = "INCORRECT";
      true4.style.color = "red";
      input4.style.border = "4px solid red";
      console.log("incorrect4");
    }

    if (
      input5.value.toLowerCase() == "eevee" ||
      input5.value.toLowerCase() == "evolution pokemon"
    ) {
      numCorrect++;
      true5.innerHTML = "CORRECT";
      true5.style.color = "lightGreen";
      input5.style.border = "6px solid lightGreen";
    } else {
      true5.innerHTML = "INCORRECT";
      true5.style.color = "red";
      input5.style.border = "4px solid red";
      console.log("incorrect5");
    }

    if (
      input6.value.toLowerCase() == "spheal" ||
      input6.value.toLowerCase() == "clap pokemon" ||
      input6.value.toLowerCase() == "round seal"
    ) {
      numCorrect++;
      true6.innerHTML = "CORRECT";
      true6.style.color = "lightGreen";
      input6.style.border = "6px solid lightGreen";
    } else {
      true6.innerHTML = "INCORRECT";
      true6.style.color = "red";
      input6.style.border = "4px solid red";
      console.log("incorrect");
    }
  } else {
    alert("Stop pressing the mark button");
  }

  // Output statement
  outputEl.innerHTML = `You got ${numCorrect}/6`;

  if (numCorrect <= 2) {
    responseEl.innerHTML = "Try again next time.";
    responseEl.style.color = "red";
  } else if (numCorrect <= 4) {
    responseEl.innerHTML = "Good job";
    responseEl.style.color = "lightBlue";
  } else {
    responseEl.innerHTML = "Great Job Congratulations";
    responseEl.style.color = "lightGreen";
  }
}

// Back to top button (w3 schools helped)
let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Background image changer
document
  .getElementById("backgroundChange")
  .addEventListener("click", changeBack);

// Variables
let backgroundEl = document.getElementById("html");
let backNum = 0;

// Background if statement
function changeBack() {
  if (backNum == 0) {
    backNum++;
    backgroundEl.style.background =
      "url(img/pokemon-party.jpg) fixed center no-repeat";
    backgroundEl.style.backgroundSize = "cover";
  } else if (backNum == 1) {
    backgroundEl.style.background =
      "url(img/eeveebackground.jpg) fixed center no-repeat";
    backgroundEl.style.backgroundSize = "cover";
    backNum++;
  } else if (backNum == 2) {
    backgroundEl.style.background =
      "url(img/plusle.jpg) fixed center no-repeat";
    backgroundEl.style.backgroundSize = "cover";
    backNum = 0;
  }
}
