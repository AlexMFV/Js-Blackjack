//When the page is loaded
window.onload = () => {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  background.src = "/resources/table_bg2.jpg";
};

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    DrawBackground();
    DrawPlayerSeats();
    return setInterval(update, 1000 / fps);
}
