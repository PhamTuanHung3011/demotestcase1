class Apple {
    status;
    wight = 10;

    constructor(status,wight) {
        this.status = status;
        this.wight = wight;
    }

    checkEmpty() {
        if (this.wight <=0) {
            this.status = false;
        } else {
            this.status = true;
        }
    }

    getKhoiLuong() {
        return this.wight;
    }
    setKhoiLuong(khoiluong) {
        this.wight = khoiluong;
    }
    decreaseApple() {
        if (this.wight > 0) {
            this.wight --;
        }
    }

}

