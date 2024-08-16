var input = document.getElementById("Answer");

function EnterNumber(x) {
    input.value +=  x;
}
function EnterClear(){
    input.value = "";
}
function EnterOperator(x){
    input.value += x;
    if(x === "/"){
        input.value
    }
}
function EnterEqual(){
    input.value = eval(input.value)
}