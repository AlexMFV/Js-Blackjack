class Card{
  //constructor(shown){
  //  this.posX = randomNumber(0, 1920);
  //  this.posY = randomNumber(0, 1000);
  //  this.suit = randomNumber(1, 5);
  //  this.value = randomNumber(1, 14);
  //  this.shown = shown;
  //}

  constructor(shown, posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.suit = randomNumber(1, 5);
    this.value = randomNumber(1, 14);
    this.shown = shown;
  }

  setShown(value){
    this.shown = value;
  }

  setPosX(x){
    this.posX = x;
  }

  setPosY(y){
    this.posY = y;
  }

  setSuit(value){
    this.suit = value;
  }

  setNumber(value){
    this.value = value;
  }

  draw(){
    var typeToUse;
    var numberToUse;
    var colorToUse;

    switch (this.suit) {
      case 1: typeToUse = hearts; colorToUse = "red"; break;
      case 2: typeToUse = clover; colorToUse = "black"; break;
      case 3: typeToUse = diamond; colorToUse = "red"; break;
      default: typeToUse = spades; colorToUse = "black"; break;
    }

    switch (this.value) {
      case 1: numberToUse = "A"; break;
      case 11: numberToUse = "J"; break;
      case 12: numberToUse = "Q"; break;
      case 13: numberToUse = "K"; break;
      default: numberToUse = this.value; break;
    }

    if(this.shown){
      ctx.drawImage(typeToUse, this.posX, this.posY, cardWidth, cardHeight);
      DrawText(numberToUse, this.posX+10, this.posY+30, 30, colorToUse);
    }
    else{
      ctx.drawImage(cardBack, this.posX, this.posY, cardWidth, cardHeight);
    }
  }
}

//function drawTestCards(t1, t2, t3, t4){
//  var typeToUse;
//  var numberToUse;
//  var colorToUse;
//
//  for(var i = 1; i <= 4; i++){
//
//    switch (i) {
//      case 1: typeToUse = hearts; colorToUse = "red"; break;
//      case 2: typeToUse = clover; colorToUse = "black"; break;
//      case 3: typeToUse = diamond; colorToUse = "red"; break;
//      default: typeToUse = spades; colorToUse = "black"; break;
//    }
//
//    for(var j = 1; j <= 13; j++){
//        switch (j) {
//          case 1: numberToUse = "A"; break;
//          case 11: numberToUse = "J"; break;
//          case 12: numberToUse = "Q"; break;
//          case 13: numberToUse = "K"; break;
//          default: numberToUse = j; break;
//        }
//
//        if(j % 2 == 0){
//          ctx.drawImage(typeToUse, 100*j, 110*i, cardWidth, cardHeight);
//          DrawText(numberToUse, 100*j+10, 110*i+30, 30, colorToUse);
//        }
//        else{
//          ctx.drawImage(cardBack, 100*j, 110*i, cardWidth, cardHeight);
//        }
//    }
//  }
//}
