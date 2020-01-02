// VARIABLES
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".text-color");
var body = document.getElementById("gradient");
var dirId = document.getElementById("direction");


// FUNCTIONS

// changing bg color
function changeBackground(){
   
    var direction = dirId.value
    body.style.background = 
        "linear-gradient(to "
        + direction +
        ", " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    css.textContent = body.style.background + ";";
}

//changing bg color direction
function changeBackgroundDirection(){
    var direction = dirId.value;
    body.style.background = 
        "linear-gradient(to "
        + direction +
        ", " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    css.textContent = body.style.background + ";";
}


//copyToClipboard functionality
function copyToClipboard() {
                    var range = document.createRange();
                    range.selectNode(document.getElementById("tocopy"));
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
                }


function changeTextColor() {
    var example = document.getElementById("example");
    example.style.color = color3.value;
}


//adding event listeners
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
color3.addEventListener("input", changeTextColor);
dirId.addEventListener("input", changeBackgroundDirection);
css.addEventListener("click", copyToClipboard);


