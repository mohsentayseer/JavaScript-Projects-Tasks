var image = document.getElementsByTagName("img")[0]
image.setAttribute("style", "display: flex;margin-left: auto;");

var divContainer = document.getElementsByClassName("center")[0]
divContainer.setAttribute("style", "text-align: unset;");

var ul = document.getElementById("nav")
ul.setAttribute("style", "text-align: center;list-style-position: inside;list-style-type: circle;");

var copyImg = document.createElement("img")
console.log(copyImg)
// copyImg.innerHTML("src")
copyImg.setAttribute("src", "dom.jpg");
divContainer.append(copyImg)
