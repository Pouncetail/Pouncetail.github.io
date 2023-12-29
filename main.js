let scrollDelta = 0;
let cnv;
   
function setup() {
    cnv = createCanvas(100, 100);
    textSize(24);
}

const titles = document.getElementById('title').style;
/*const body1 = document.getElementById('body_1').style;
const body12 = document.getElementById('body_12').style;
const body2 = document.getElementById('body_2').style;
const body22 = document.getElementById('body_22').style;*/

function mouseWheel(event) {
    titles.fontSize = max(57 - window.scrollY / 2, 35) + "px";
    titles.opacity = 1 - (window.scrollY / 60) + " ";
    /*body1.fontSize = 60 - max(60 - window.scrollY, 5) + "px";
    body12.fontSize = 60 - max(60 - window.scrollY, 5) + "px";
    body2.fontSize = 60 - max(60 - window.scrollY, 5) + "px";
    body22.fontSize = 60 - max(60 - window.scrollY, 5) + "px";*/
}