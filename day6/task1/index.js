//TASK::Clone HTML div when it is clicked and change the background of the new copy to a random color then append it to the body.
var div = document.getElementById("bgcolor");
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
div.addEventListener("click", function () {
    var cloneDiv = div.cloneNode(true);
    cloneDiv.innerText = "HELLO from SUBmain";
    cloneDiv.setAttribute("style", "background-color: " + randomColor() + ";");
    cloneDiv.style.backgroundColor = randomColor();
    document.body.append(cloneDiv);
})