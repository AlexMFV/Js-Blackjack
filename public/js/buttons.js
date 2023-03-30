class Button{

    constructor(x, y, w, h, text = "", color = "grey", stroke = "black", fontSize = 20, fontColor = "white", fontName = "Verdana"){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.color = color;
        this.stroke = stroke;
        this.fontSize = fontSize
        this.fontColor = fontColor;
        this.fontName = fontName;
        this.isHover = false;
        this.isEnabled = true;
    }

    draw(){
        if(!this.isEnabled)
            ctx.globalAlpha = 0.5;
            
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.font = this.fontSize + "px " + this.fontName;
        ctx.textAlign="center"; 
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.fontColor;
        ctx.fillText(this.text, this.x + (this.w/2), this.y + (this.h/2));
        ctx.closePath();
        ctx.globalAlpha = 1;
    }

    changeHover(hoverState){
        if(this.isHover != hoverState && this.isEnabled)
        {
            var aux = this.color;
            this.color = this.stroke;
            this.stroke = aux;
            this.isHover = hoverState;
        }
    }

    setEnabled(state)
    {
        this.isEnabled = state;
    }

    setPosX(x){
        this.x = x;
    }
    
    setPosY(y){
        this.y = y;
    }

    setWidth(w){
        this.w = w;
    }

    setHeight(h){
        this.h = h;
    }

    setColor(color){
        this.color = color;
    }

    setStroke(stroke){
        this.stroke = stroke;
    }
}