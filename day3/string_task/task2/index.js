do { var word = prompt("please Enter a string") }
while (word === "")

var x = confirm("You need to consider case?");
if (!x) {
    word = word.toLowerCase();
}
var count = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] === 'e') {
        count++;
    }
}
document.write("Number of (e) = "+count+"")