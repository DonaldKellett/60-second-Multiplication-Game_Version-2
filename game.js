/*
 * game.js
 * 60-second Multiplication Game (Version 2)
 * Copyright (c) Donald Leung.  All rights reserved.
 * 
 * Updates:
 * Difficulty of game increases as the player answers more and more questions
 */

var timeInSeconds = 60;
var numOne,
	numTwo,
	answer,
	totalQuestions,
	questionsCorrect,
	playerAnswer;

function initialize() {
	numOne = Math.round(5 * Math.random());
	numTwo = Math.round(5 * Math.random());
	answer = numOne * numTwo;
	totalQuestions = 0;
	questionsCorrect = 0;
	document.getElementById("numOne").innerHTML = numOne;
	document.getElementById("numTwo").innerHTML = numTwo;
}

function startTimer() {
	timeInSeconds -= 1;
	document.getElementById("timer").innerHTML = "Time Remaining: " + timeInSeconds + " seconds";
	if (timeInSeconds < 0) {
		document.getElementById("timer").innerHTML = "TIME'S UP!";
		document.getElementById("gameWindow").innerHTML = "<h2 style='font-size: 4em; font-weight: bolder;'>You scored " + questionsCorrect + " out of " + totalQuestions + "!  Good job!</h2>";
		document.getElementById("script-wrapper").innerHTML = "<!-- Script successfully deleted -->";
					}
	setTimeout("startTimer()", 1000);
}

function startGame() {
	document.getElementById("horizontalRule").style.display = "block";
	document.getElementById("gameWindow").style.display = "block";
	startTimer();
	disableStartButton();
	initialize();
}

function disableStartButton() {
	document.getElementById("startButton").style.display = "none";
}

function verify() {
	if (timeInSeconds >= 0) {
		playerAnswer = document.getElementById("playerAnswer").value;
		if (playerAnswer === answer.toString()) {
			totalQuestions++;
			questionsCorrect++;
			if (totalQuestions <= 5) {
				numOne = Math.round(5 * Math.random());
				numTwo = Math.round(5 * Math.random());
			} else if (totalQuestions > 5 && totalQuestions <= 10) {
				numOne = Math.round(7 * Math.random());
				numTwo = Math.round(7 * Math.random());
			} else if (totalQuestions > 10 && totalQuestions <= 15) {
				numOne = Math.round(9 * Math.random());
				numTwo = Math.round(9 * Math.random());
			} else if (totalQuestions > 15 && totalQuestions <= 25) {
				numOne = Math.round(12 * Math.random());
				numTwo = Math.round(12 * Math.random());
			} else {
				numOne = Math.round(10 * Math.random()) + 10;
				numTwo = Math.round(10 * Math.random()) + 10;
			}
			answer = numOne * numTwo;
			document.getElementById("numOne").innerHTML = numOne;
			document.getElementById("numTwo").innerHTML = numTwo;
			document.getElementById("playerAnswer").value = "";
		} else {
			totalQuestions++;
			if (totalQuestions <= 5) {
				numOne = Math.round(5 * Math.random());
				numTwo = Math.round(5 * Math.random());
			} else if (totalQuestions > 5 && totalQuestions <= 10) {
				numOne = Math.round(7 * Math.random());
				numTwo = Math.round(7 * Math.random());
			} else if (totalQuestions > 10 && totalQuestions <= 15) {
				numOne = Math.round(9 * Math.random());
				numTwo = Math.round(9 * Math.random());
			} else if (totalQuestions > 15 && totalQuestions <= 25) {
				numOne = Math.round(12 * Math.random());
				numTwo = Math.round(12 * Math.random());
			} else {
				numOne = Math.round(10 * Math.random()) + 10;
				numTwo = Math.round(10 * Math.random()) + 10;
			}
			answer = numOne * numTwo;
			document.getElementById("numOne").innerHTML = numOne;
			document.getElementById("numTwo").innerHTML = numTwo;
			document.getElementById("playerAnswer").value = "";
		}
	} else {alert("Time's up!  You are not allowed to answer anymore.");}
}