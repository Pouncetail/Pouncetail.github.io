let numOfCookies = 0;
let upgrade = 30;
let counter = 1;
let cnv;
const output = document.getElementById("output");
   
function setup(){
    cnv = creatdocument.getElementByIds(600, 1000);
    cnv.mouseClicked();
}

function cookieAdd(){
  numOfCookies = numOfCookies + counter;
  output.textContent = `Cookie Number: ${numOfCookies} ${counter} ${upgrade}`;
}

function myFunction() {
  
}

function addClicker(){
  if ( numOfCookies >= upgrade ) {
    numOfCookies = numOfCookies - upgrade;
    upgrade = upgrade * 2;
    counter = counter + 1;
    output.textContent = `Cookie Number: ${numOfCookies} ${counter} ${upgrade}`;
  }
}