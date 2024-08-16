
// do {
//     var raduis = prompt("please Enter the circle’s radius :")
//     if (raduis <= 0 || isNaN(raduis)) {
//         alert("you must enter a valid number greater than zero.")
//     } else
//         raduis = Number(raduis)
//     var area = Math.PI * Math.pow(raduis, 2)
//     document.write("circle area = " + area)
// }
// while (raduis <= 0 || isNaN(raduis))


do {
    var radius = prompt("Please enter the circle’s radius:");
    if (radius <= 0 || isNaN(radius)) {
        alert("You must enter a valid number greater than zero.");
    }
} while (radius <= 0 || isNaN(radius));
radius = Number(radius);
var area = Math.PI * Math.pow(radius, 2);
document.write("Circle area = " + area);
