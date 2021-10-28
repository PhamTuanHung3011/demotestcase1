class nhanVatPhu {
    img;
    x
    y
    Cdai;
    Crong;
    speed;


    constructor(img, x ,y , Cdai, Crong, speed) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.Cdai = Cdai;
        this.Crong = Crong;
        this.speed = speed;


    }
    drawImgOne(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.Cdai, this.Crong );
    }
    move() {
        if (this.y < 650) {
            this.y += this.speed;
            // console.log(this.y);
        } else {
            const randomX = Math.ceil(Math.random() * 500);
            console.log(randomX);
            this.y = 0;
            if (this.x > 1300) {
                this.x = 700 - randomX;
            } else {
                this.x += randomX;
            }
        }
    }
}
