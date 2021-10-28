let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let nobita1 = document.getElementById('nobita');
let yuaMikami = document.getElementById('yua');
let zoroOne = document.getElementById('zoro');
let sanji1 = document.getElementById('sanji');
// ctx.drawImage(img, 0, 0, 200, 100);
// ctx.drawImage(img1, 0,0,200,100);
function leftArrowPressed() {
    let element = document.getElementById('nobita');
    element.style.left = parseInt(element.style.left) - 40 + 'px';
}

function rightArrowPressed() {
    let element = document.getElementById('nobita');
    element.style.left = parseInt(element.style.left) + 40 + 'px';
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            console.log("39")
            rightArrowPressed();
            break;

    }
}

// // clearCanvas();
// // car.drawCar(ctx);
// function clearCanvas() {
//     ctx.clearRect(0, 0, 1500, 650);
//
// }
//
// let x = 0;
// let y = 0;
// let timeOut;
// let timeOut1;
//
// function diChuyen() {
//     clearCanvas()
//     move();
//     ctx.drawImage(img, x, y, 300, 200);
//     timeOut = setTimeout(diChuyen, 50);
//     // timeOut = requestAnimationFrame(diChuyen);
// }
// // function nobita1 () {
// //     diChuyen()
// //     clearCanvas()
// //     move();
// //     ctx.drawImage(img, x, y, 300, 200);
// //     // timeOut = requestAnimationFrame(diChuyen);
// // }
// // function yua1() {
// //     diChuyen();
// //     clearCanvas();
// //     move();
// //     ctx.drawImage(img1, x, y, 300, 200);
// // }
//
// // // function reset() {
// // //     if (y => 650 && timeOut) {
// // //         clearCanvas();
// // //         clearTimeout()
// // //         ctx.drawImage(img, x, y, 200, 100);
// // //         timeOut = setTimeout(diChuyen, 50);
// //     }
// // }
//
// function randomMove() {
//     Math.ceil(Math.random()* 500);
// }
// function move() {
//     if (y < 650) {
//         y += 20;
//     } else {
//         const ngaunhien = Math.ceil(Math.random()* 500);
//         console.log(ngaunhien);
//         y = 0;
//         if (x > 1300) {
//             x = 500 - ngaunhien;
//         }
//         else  {
//             x += ngaunhien;
//         }
//
//     }
//
//
// }
//
// // document.getElementById('nobita').style.display = 'none'
// window.addEventListener('keydown', moveSelection);
// diChuyen();
//
// // nobita1();
// // yua1();
//


let Nobita = new nhanVatPhu(nobita1, 0, 0, 200, 200,1.3);
Nobita.drawImgOne(ctx);
let Yuamikami = new nhanVatPhu(yuaMikami, 205, 0, 200, 200,1.5);
Yuamikami.drawImgOne(ctx);
let Zoro = new nhanVatPhu(zoroOne, 410, 0, 200,200,1);
let nVchinh = new NhanVatChinh(sanji1, 0,450,200,200);
nVchinh.drawNvChinh(ctx);
console.log(Math.ceil(Math.random()*5))
let arr = [Nobita, Yuamikami,Zoro];
function downLine() {
    for (let arrKey in arr) {
        let a = Math.ceil(Math.random()*arrKey*2)
        console.log(arrKey);
        if (a <=1) {
            Nobita.drawImgOne(ctx);
            Nobita.move();
            clearCanvas();

        } else if ( a <= 2 && a > 1 ) {
            Yuamikami.drawImgOne(ctx);
            Yuamikami.move();
            clearCanvas();

        } else {
            Zoro.drawImgOne(ctx);
            Zoro.move();
            clearCanvas();

        }

    }
    requestAnimationFrame(downLine);
}

downLine();


let x = 0;
let y = 0;
let timeOut;

function clearCanvas() {
    ctx.clearRect(0, 0, 1500, 650);
}

function diChuyen() {
    Nobita.move();
    Yuamikami.move();
    Zoro.move();
    clearCanvas();
    Nobita.drawImgOne(ctx);
    Yuamikami.drawImgOne(ctx);
    Zoro.drawImgOne(ctx);
    // timeOut = setTimeout(diChuyen, 100);
    requestAnimationFrame(diChuyen);
}

diChuyen();
moveSelection(nobita1);
window.addEventListener('keydown', moveSelection);
document.getElementById('yua').style.display = 'none'
document.getElementById('zoro').style.display = 'none';
document.getElementById('nobita').style.display = 'none';
document.getElementById('sanji').style.display = 'none';