//When the page is loaded
window.onload = () => {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  background.src = "/resources/table_bg2.jpg";
  seatOffset = canvas.width * 0.1;
  console.log("SeatOffset: " + seatOffset);
  CreateButtons();
};

window.onmousemove = function(e){mousePos = {x: e.clientX, y: e.clientY}};

window.onresize = () => {
  console.log(cardWidth, cardHeight);
  window.requestAnimationFrame(updateCanvas);
}

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    return setInterval(update, 1000 / fps);
}

//Create a beautiful, colorful, clicable button with text Bet
function CreateButtons(x, y, w, h, text, color){
  let button = {
    x: x,
    y: y,
    w: w,
    h: h,
    text: text,
    color: color,
    hover: false,
    draw: function(){
      if(this.hover){
        ctx.fillStyle = this.color;
      }else{
        ctx.fillStyle = "white";
      }
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x, this.y, this.w, this.h);
      DrawText(this.text, this.x + (this.w/2), this.y + (this.h/2), 20, "black");
    },
    changeHover: function(bool){
      this.hover = bool;
    }
  };
  buttons.push(button);
}

function checkbuttonpress(e){
  buttons.forEach(button => {
    if((mousePos.x >= button.x && mousePos.x <= (button.x+button.w)) &&
    (mousePos.y >= button.y && mousePos.y <= (button.y+button.h)))
    {
      
      return;
    }
  });
}