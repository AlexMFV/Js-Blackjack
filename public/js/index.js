function update(){
  ClearScreen();
  window.requestAnimationFrame(draw);
}

function draw(){
  DrawBackground();
  DrawPlayerSeat(newX, newY, "123");
  DrawPlayerSeats();
  newX = newX + 10;
  newY = newY + 10;
}
