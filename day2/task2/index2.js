alert("Welcome to my site")
var userName = prompt("enter your name:")
var color = prompt("which color you prefer of these colors (red, green, blue)")
color = color.toLowerCase();
if (color !== "red" && color !== "green" && color !== "blue") {
    color = "black";
}
document.write("<h1 style='color:" + color + "'> Welcome " + userName + "</h1>")
