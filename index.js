// Random Number 1
var num1 = Math.ceil(Math.random() * 6); //Generating random number 1
var randomImgNum = "dice" + num1 + ".png"; //dice image name. Ex. dice1.png
var randomImgSrc = "images/" + randomImgNum; //dice src. Ex. images/dice1.png
document.querySelector(".img1").setAttribute("src", randomImgSrc); //changing src attribute of image

// Random Number 2
var num2 = Math.ceil(Math.random() * 6); //Generating random number 2
randomImgNum = "dice" + num2 + ".png"; //dice image name. Ex. dice1.png
randomImgSrc = "images/" + randomImgNum; //dice src. Ex. images/dice1.png
document.querySelector(".img2").setAttribute("src", randomImgSrc); //changing src attribute of image

// Num1 and Num2 Comparison
if (num1 > num2) {
  document.querySelector("h1").innerHTML = "Player1 Wins"; // num1 > num2
} else if (num2 > num1) {
  document.querySelector("h1").innerHTML = "Player2 Wins"; // num2 > num1
} else {
  document.querySelector("h1").innerHTML = "Draw"; // num1 === num2
}
