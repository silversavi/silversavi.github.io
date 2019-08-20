var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".text-color");
var body = document.getElementById("gradient");
var dirId = document.getElementById("direction");


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

function copyToClipboard() {
  /* Get the text field */
  var copyText = css.innerText;
  console.log(copyText)
  copyText.select;
  /* Copy the text inside the text field */
  document.execCommand("copy");
  alert("Copied the following text to clipboard: \n" + copyText)
}

function changeTextColor() {
    var example = document.getElementById("example");
    example.style.color = color3.value;
}


color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
color3.addEventListener("input", changeTextColor);
dirId.addEventListener("input", changeBackgroundDirection);
css.addEventListener("click", copyToClipboard);


