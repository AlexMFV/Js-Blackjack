function DrawLine(x1, y1, x2, y2){
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = 1;
  ctx.stroke();
}

function DrawText(text, x, y, size, color){
  var textFont = (size + "px Verdana");
  ctx.font = textFont;
  ctx.strokeStyle = color;
  ctx.fillText(text, x, y);
}

function DrawPlayerSeat(x, y, username){
  ctx.strokeStyle = "#deb916dd";
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, 50, 70);
}

function ClearScreen(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function DrawBackground(){
  ctx.drawImage(background,0,0, canvas.width, canvas.height);
}

function DrawPlayerSeats(){
  let spacingX = canvas.width / playerCount;
  for(let i = 1; i <= playerCount-1; i++){
      DrawPlayerSeat(spacingX*i, 600, "Alex");
  }
}
