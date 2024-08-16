var userInput = prompt("Please enter your BirthDate in this format => DD–MM–YYYY")

function ValidDate(userInput) {
    var y = userInput.split("-")
    if (userInput[2] !== '-' || userInput[5] !== '-' || userInput.length !== 10) {
        alert("worng date format!")
    }

    else if (parseInt(y[2]) >= 1950 && parseInt(y[2]) <= 2010 && parseInt(y[1]) - 1 >= 1 && parseInt(y[1]) - 1 <= 12 && parseInt(y[0]) >= 1 && parseInt(y[0]) <= 31) {

        var date = new Date(parseInt(y[2]), parseInt(y[1]) - 1, parseInt(y[0]));
        alert(date)
    }
    else {
        alert("worng date format")
    }
}
ValidDate(userInput)

//improve this code using try/catch 