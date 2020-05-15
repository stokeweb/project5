let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbedr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbedr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbedr3");


stpbl1.onmousemove = function () {
    stpbrdr1.style.borderBottom = "3px solid white";
}
stpbl1.onmouseout = function () {
    stpbrdr1.style.borderBottom = "3px solid black";
}

stpbl2.onmousemove = function () {
    stpbrdr2.style.borderBottom = "3px solid white";
}
stpbl2.onmouseout = function () {
    stpbrdr2.style.borderBottom = "3px solid black";
}

stpbl3.onmousemove = function () {
    stpbrdr3.style.borderBottom = "3px solid white";
}
stpbl3.onmouseout = function () {
    stpbrdr3.style.borderBottom = "3px solid black";
}