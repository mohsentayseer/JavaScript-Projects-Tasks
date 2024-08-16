function reverseFunction() {
    var arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
    arr.reverse()
    document.write(arr)
}
reverseFunction(1, 2, 3, 4, 5, 6, 7, 8,9);
