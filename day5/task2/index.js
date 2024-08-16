do {
    var numUsers = prompt("enter the No of users :\n Note: No of users should be between 3:10")
} while (isNaN(numUsers) || Number(numUsers) < 2 || Number(numUsers) > 11);
var nameArr = [];
var ageArr = [];
for (let i = 0; i < Number(numUsers); i++) {
    do {
        var UserName = prompt("Enter the NAME of user " + (i + 1) + ":\nNote: name length should be between 3:10 characters");
    } while (!isNaN(UserName) || UserName.length < 2 || UserName.length > 11);
    nameArr.push(UserName);
    do {
        var UserAge = prompt("Enter the AGE of user " + (i + 1) + ":\nNote: name length should be between 10:60 ");
    } while (isNaN(UserAge) || Number(UserAge) < 9 || Number(UserAge) > 61);
    ageArr.push(UserAge);
}
var tbod = document.querySelector("tbody");
for (let i = 0; i < nameArr.length; i++) {
    var tr = document.createElement("tr")
    tr.innerHTML = "<td> " + nameArr[i] + "</td><td>" + ageArr[i] + "</td>";
    tbod.appendChild(tr)
}
// const ageTd = document.createElement("td");///for best practice
//     ageTd.textContent = ageArr[i];
//     tr.appendChild(ageTd);

////////////////////STYLE///////////////////////////////////////STYLE///////////////////
var table = document.querySelector("table");
table.setAttribute("style", "visibility: visible; border: 1px solid #ddd; width: 50%; margin: 20px auto; background-color: #f9f9f9; border-collapse: collapse; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;");

var headerRow = document.querySelector("table tr");
headerRow.setAttribute("style", "background-color: #4CAF50; color: white;");

var headers = headerRow.querySelectorAll("th");
headers.forEach(function (th) {
    th.setAttribute("style", "padding: 12px; text-align: center; font-size: 16px; border-bottom: 2px solid #ddd;");
});

var cells = table.querySelectorAll("td");
cells.forEach(function (td) {
    td.setAttribute("style", "padding: 10px; text-align: center; border-bottom: 1px solid #ddd;");
});
////////////////////STYLE///////////////////////////////////////STYLE///////////////////
