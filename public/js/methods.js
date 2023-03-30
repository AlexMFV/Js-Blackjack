function updateCanvas(){
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  seatOffset = canvas.width * 0.1;
}

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
  ctx.fillStyle = color;
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
  let spacingX = (canvas.width - seatOffset) / playerCount;
  for(let i = 0; i < playerCount; i++){
      DrawPlayerSeat(35 + (seatOffset) + (spacingX*i), 600, "Alex");
  }
}