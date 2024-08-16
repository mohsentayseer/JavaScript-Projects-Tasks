var arr = []
alert("please enter 5 elements to make mathematical operations")
for (let i = 1; i <= 5; i++) {
    do {
        var x = Number(prompt("Please enter number " + i + ":"));
    } while (isNaN(x));
    arr.push(x)
}

// var asc = arr.sort((a, b) => a - b)
// document.write("Ascending order: " + asc + "<br>")
// var des = asc.reverse()
// document.write("Descending order: " + des)

//////////////////////////////////////
var asc = arr.slice().sort((a, b) => a - b);
var des = arr.slice().sort((a, b) => b - a);
document.write("Ascending order: " + asc + "<br>" + "Descending order: " + des);
