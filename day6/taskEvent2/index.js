var input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    if ([46, 8, 9, 27, 13, 37, 38, 39, 40].indexOf(event.keyCode) !== -1) {
        return;
    }
    if (((event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
    }
});
input.addEventListener('input', function () {
    var value = this.value;
    var filteredValue = '';
    for (var i = 0; i < value.length; i++) {
        var char = value.charAt(i);//convert char to charIndex
        if (char >= '0' && char <= '9') {
            filteredValue += char;
        }
    }
    input.value = filteredValue;
});
