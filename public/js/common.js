//Canvas/Animation variables
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var background = new Image();

//Auxiliary Variables
var seatOffset;
var cardWidth = 70;
var cardHeight = 100;

//Game Variables
let fps = 30;
let playerCount = 5;

function randomNumber(min, max){
  return Math.floor((Math.random() * (max - min) + min));
}