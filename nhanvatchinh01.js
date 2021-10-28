class NhanVatChinh {
    img;
    x;
    y;
    height;
    width;

    constructor(img, x, y, height, width) {
        this.img = img
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    drawNvChinh(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }


    moveLeft() {
        this.x -= 10;
    }

    moveRight() {
        this.x += 10;
    }

}