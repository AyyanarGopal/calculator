
function num1(){
    var danger = document.getElementById("one").play();
}

function num2(){
    var danger = document.getElementById("two").play();
}

function num3(){
    var danger = document.getElementById("three").play();
}
function num4(){
    var danger = document.getElementById("four").play();
}
function num5(){
    var danger = document.getElementById("five").play();
}
function num6(){
    var danger = document.getElementById("six").play();
}
function num7(){
    var danger = document.getElementById("seven").play();
}
function num8(){
    var danger = document.getElementById("eight").play();
}
function num9(){
    var danger = document.getElementById("nine").play();
}
function num0(){
    var danger = document.getElementById("zero").play();
}
function num00(){
    var danger = document.getElementById("doublezero").play();
}


function numDot(){
    var danger = document.getElementById("dot").play();
}


function numPlus(){
    var danger = document.getElementById("plus").play();
}
function numMinus(){
    var danger = document.getElementById("minus").play();
}
function numMulti(){
    var danger = document.getElementById("multi").play();
}
function numDiv(){
    var danger = document.getElementById("div").play();
}
function numMod(){
    var danger = document.getElementById("mod").play();
}





var val = document.getElementById("outputscreen");

function display(v) {
    val.value += v;
}

function Clear() {
    val.value = "";
    var danger = document.getElementById("clear").play();
}

function del() {
    val.value = val.value.slice(0, -1);
    var danger = document.getElementById("delete").play();  
}

function calculate() {
    val.value = eval(val.value)
    var danger = document.getElementById("total").play();
}




function changeNewTheme() {
    document.querySelector(".outputscreen").style = "box-shadow:inset 5px 5px 5px 0px black, 3px 4px 9px 0px lightgrey";
    document.querySelector(".grid-container").style = "background:linear-gradient(355deg,lime, #fb008e)";
    const nodelist = document.querySelectorAll(".btn");
    for (let i = 0; i < nodelist.length; i++) {
        nodelist[i].style.background = "black";
        nodelist[i].style.color = "white";
        nodelist[i].style.border = "inset 7px";
        nodelist[i].style.borderRadius = "50%";
        nodelist[i].style.borderStyle = "inset";
        nodelist[i].style.boxShadow = "2px 3px 0px 5px black";
        nodelist[i].style.transition = "2s";
    }
}

function changeOldTheme() {
    document.querySelector(".grid-container").style = "background:linear-gradient(340deg, #222122, #00f8f8)";
    document.querySelector(".outputscreen").style = "box-shadow: inset 0px 0px 5px 0px black, 3px 4px 9px 0px lightgrey;";
    const nodelist = document.querySelectorAll(".btn");
    for (let i = 0; i < nodelist.length; i++) {
        nodelist[i].style.background = "white";
        nodelist[i].style.color = "black";
        nodelist[i].style.border = "7px ridge white";
        nodelist[i].style.borderRadius = "12px";
        nodelist[i].style.transition = "2s";
        nodelist[i].style.boxShadow = "inset 0px 0px 5px 0px black, 3px 4px 9px 0px lightgrey";
    }
}

function changeIndiaFlagTheme() {
    document.querySelector(".grid-container").style = "background:linear-gradient(174deg, orange, white, green)";
    document.querySelector(".outputscreen").style = "box-shadow: inset 0px 0px 5px 0px black, 3px 4px 9px 0px lightgrey;";
    const nodelist = document.querySelectorAll(".btn");
    for (let i = 0; i < nodelist.length; i++) {
        nodelist[i].style.borderRadius = "50%";
        nodelist[i].style.border = "7px dotted blue";
        nodelist[i].style.transition = "2s";
    }
}
