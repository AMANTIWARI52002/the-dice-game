var randomDice1 = Math.floor(Math.random()*6 )+1;
var randomDiceImg = "dice" + randomDice1 + ".png";
var randomImageSource = "imgs/" + randomDiceImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , randomImageSource);

var randomDice2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "imgs/dice" + randomDice2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , randomImageSource2);

if (randomDice1 > randomDice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomDice2 > randomDice1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}