var inputName = document.querySelector(".inputName");
var inputAge = document.querySelector(".inputAge");
var inputEmail = document.querySelector(".inputEmail");
var submit = document.getElementsByTagName("button")[0];
var reset = document.getElementsByTagName("button")[1];
var spans = document.getElementsByTagName("span");
var form = document.querySelector("form");
var userTable = document.getElementById("userTable");
var table = document.querySelector("table");

submit.addEventListener("click", function () {
  var isValid = nameValidation() & ageValidation() & emailValidation();

  if (isValid) {
    table.style.display = "table";
    var newRow = userTable.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerText = inputName.value;
    cell2.innerText = inputAge.value;
    cell3.innerText = inputEmail.value;

    form.reset();
  }
});
reset.addEventListener("click", function () {
  inputName.value = "";
  inputAge.value = "";
  inputEmail.value = "";
  spans[0].innerText = "";
  spans[1].innerText = "";
  spans[2].innerText = "";
});

var nameValidation = function () {
  console.log(inputName.value);
  if (inputName.value === "") {
    spans[0].innerText = "you should enter your Name";
    spans[0].style.color = "red";
    return false;
  } else if (isFinite(inputName.value)) {
    spans[0].innerText = "you should enter characters only";
    spans[0].style.color = "red";
    inputName.value = "";
    return false;
  } else {
    spans[0].innerText = "";
    return true;
  }
};
var ageValidation = function () {
  console.log(inputAge.value);
  if (inputAge.value === "") {
    spans[1].innerText = "you should enter your Age";
    spans[1].style.color = "red";
    return false;
  } else if (isNaN(inputAge.value) || inputAge.value <= 0) {
    spans[1].innerText = "you should enter a valid Number";
    spans[1].style.color = "red";
    inputAge.value = "";
    return false;
  } else {
    spans[1].innerText = "";
    return true;
  }
};

var emailValidation = function () {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputEmail.value === "" || !emailPattern.test(inputEmail.value)) {
    spans[2].innerText = "You should enter a valid email {example@email.com}";
    spans[2].style.color = "red";
    inputEmail.value = "";
    return false;
  } else {
    spans[2].innerText = "";
    return true;
  }
};

console.log(fds);
var sss = "sdsf";
