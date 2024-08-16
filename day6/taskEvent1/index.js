document.addEventListener("keydown", function (event) {
    var asciiCode = event.keyCode;
    var keyName = event.key;
    var altKey = event.altKey;
    var ctrlKey = event.ctrlKey;
    var shiftKey = event.shiftKey;

    var msg = "Key Pressed: " + keyName + "\n" +
        "ASCII Code: " + asciiCode + "\n" +
        "Alt Key Pressed: " + altKey + "\n" +
        "Ctrl Key Pressed: " + ctrlKey + "\n" +
        "Shift Key Pressed: " + shiftKey;
    alert(msg)
})
