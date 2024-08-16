
var userInput = prompt("Please enter your BirthDate in this format => DD–MM–YYYY")

function isValidDate(userInput) {
    var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var y = userInput.split("-")
    if (userInput[2] !== '-' || userInput[5] !== '-' || userInput.length !== 10) {
        throw "Wrong Date format"
    }
    else {
        var date = new Date(parseInt(y[2]), parseInt(y[1]) - 1, parseInt(y[0]));
        alert(arr[date.getDay()])
    }
}
isValidDate(userInput)
