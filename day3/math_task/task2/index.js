do {
    var num = prompt("please enter a number :")
    if (num < 0 || isNaN(num)) {
        alert("you must enter a positive number")
    }

} while (num < 0 || isNaN(num))
document.write("the square of " + num + " is => " + Math.pow(Number(num), 2) + "")