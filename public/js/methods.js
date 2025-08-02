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

function DrawPlayerSeats() {
  const centerX = canvas.width / 2;
  const centerY = 0;
  const radius = Math.min(canvas.width, canvas.height) * -.65;
  const startAngle = Math.PI * 1.1;
  const endAngle = Math.PI * 1.9;
  const angleStep = (endAngle - startAngle) / (playerCount - 1);

  for (let i = 0; i < playerCount; i++) {
    const angle = startAngle + angleStep * i;
    const x = centerX + radius * Math.cos(angle) - 25; // 25 = half seat width
    const y = centerY + radius * Math.sin(angle) - 35; // 35 = half seat height
    DrawPlayerSeat(x, y, "Alex");
  }
}

function DrawDealerTable() {
  const centerX = canvas.width / 2;
  const centerY = 100;
  const radius = Math.min(canvas.width, canvas.height) * 0.7;

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 1);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
}