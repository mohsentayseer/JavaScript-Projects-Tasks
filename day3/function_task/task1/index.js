function onlyTwoParameters() {
    if (arguments.length != 2) {
        throw new Error("Need 2 parameters");
    }
    document.write("parameters accepted")
}

onlyTwoParameters(2, 3);
// onlyTwoParameters(1);
// onlyTwoParameters(1, 2, 3);
