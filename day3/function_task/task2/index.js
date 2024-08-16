function numericalParamsOnly() {

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number')
            throw new Error("Need numerical values only");
    }
    document.write("parameters accepted")

}
numericalParamsOnly(2, 3, 4, 5, 6, 7, 8);
// numericalParamsOnly(1,2,"4");
// numericalParamsOnly(1, 2, "mohsen");
