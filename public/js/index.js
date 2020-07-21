var hearts = new Image();
var clover = new Image();
var diamond = new Image();
var spades = new Image();

hearts.src = "/resources/heartCard.jpg";
clover.src = "/resources/cloverCard.jpg";
diamond.src = "/resources/diamondCard.jpg"
spades.src = "/resources/spadeCard.jpg";

function update(){
  ClearScreen();
  window.requestAnimationFrame(draw);
}

function draw(){
  DrawBackground();
  DrawPlayerSeats();
  drawTestCards();
}

function drawTestCards(t1, t2, t3, t4){
  var typeToUse;
  var numberToUse;
  var colorToUse;

  for(var i = 1; i <= 4; i++){

    switch (i) {
      case 1: typeToUse = hearts; colorToUse = "red"; break;
      case 2: typeToUse = clover; colorToUse = "black"; break;
      case 3: typeToUse = diamond; colorToUse = "red"; break;
      default: typeToUse = spades; colorToUse = "black"; break;
    }

    for(var j = 1; j <= 13; j++){
        switch (j) {
          case 1: numberToUse = "A"; break;
          case 11: numberToUse = "J"; break;
          case 12: numberToUse = "Q"; break;
          case 13: numberToUse = "K"; break;
          default: numberToUse = j; break;
        }

        ctx.drawImage(typeToUse, 100*j, 110*i);
        DrawText(numberToUse, 100*j+10, 110*i+30, 30, colorToUse);
    }
  }
}
