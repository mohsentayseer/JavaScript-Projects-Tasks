var arr = []
alert("please enter 3 elements to make mathematical operations")
for (let i = 1; i <= 3; i++) {
    do {
        x = Number(prompt("Please enter number " + i + ":"));
    } while (isNaN(x));
    arr.push(x)
}
var num1 = arr[0];
var num2 = arr[1];
var num3 = arr[2];
var sum = num1 + num2 + num3
var product = num1 * num2 * num3
var division = num1 / num2 / num3

document.write("" + num1 + "+" + num2 + "+" + num3 + "= " + sum + "<br>")
document.write("" + num1 + "*" + num2 + "*" + num3 + "= " + product + "<br>")
if(num2 === 0 || num3 === 0){
    document.write("Math error! You can't divide by zero")
 }else
document.write("" + num1 + "/" + num2 + "/" + num3 + "= " + division + " ")