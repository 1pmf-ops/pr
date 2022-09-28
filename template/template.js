document.onkeydown = checkKey;
let main = document.querySelector(".start");
let sl = document.querySelectorAll(".start > div");
let currSl = 0;
let lock = false;

sl[0].classList.toggle("o1");

function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '37') {
        if(currSl > 0) {
            sl[currSl].classList.toggle("o1");
            currSl--;
            sl[currSl].classList.toggle("o1");
        }
    }
    else if (e.keyCode == '39') {
        if(currSl+1<sl.length) {
            sl[currSl].classList.toggle("o1");
            currSl++;
            sl[currSl].classList.toggle("o1");
        }
    }

}

