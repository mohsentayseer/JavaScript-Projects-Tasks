var entered_num;
var sum = 0

do {
    entered_num = prompt("please, Enter a number : \n note: If you need to stop, Enter 0")
    if (!isNaN(entered_num)) {
        entered_num = Number(entered_num)
        sum += entered_num
        if (entered_num == 0 || sum > 100) {
            document.write("Sum is " + sum)
            break;
        }
    }
    else {
        alert("enter a numeric input")
    }
} while (!entered_num == 0);