
do {
    var word = prompt("Enter the word");
} while (word === "");

var x = confirm("You need to consider case?");
if (!x) {
    word = word.toLowerCase();
}
var isPalindrome = true;
for (var i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log("true");
} else {
    console.log("false");
}

// var word = prompt("Enter the word")
// var x = confirm("You need to consider case ?")
// if (!x) {
//     var word = word.toLowerCase()
// }
// var isPalindrome = true;
// for (var i = 0; i < word.length; i++) {
//     if (word[i] !== word[word.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
//     else if (word[i] === word[word.length - 1 - i]) {
//         if (i >= word.length - 1 - i) {
//             break;
//         }
//     }
// }
// if (isPalindrome) {
//     console.log("true");
// } else { console.log("false");
    
// }
