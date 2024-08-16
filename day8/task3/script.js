var inputName = document.querySelector(".inputName");
var inputMobile = document.querySelector(".inputMobile");
var inputEmail = document.querySelector(".inputEmail");
var inputGender = document.querySelector(".inputGender");
var inputAddress = document.querySelector(".inputAddress");
var register = document.getElementsByTagName("button")[0];
var spans = document.getElementsByTagName("span");
var form = document.querySelector("form");
var timeout;
timeout = setTimeout(function () {
  alert("Timeout !");
}, 5000);
form.addEventListener("input", function () {
  clearTimeout(timeout);
});

register.addEventListener("click", function (e) {
  if (
    !nameValidation() ||
    !emailValidation() ||
    !mobileValidation() ||
    !genderValidation() ||
    !addressValidation()
  ) {
    e.preventDefault();
  }
});

var nameValidation = function () {
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
var emailValidation = function () {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputEmail.value === "" || !emailPattern.test(inputEmail.value)) {
    spans[1].innerText = "You should enter a valid email {example@email.com}";
    spans[1].style.color = "red";
    inputEmail.value = "";
    return false;
  } else {
    spans[1].innerText = "";
    return true;
  }
};
var mobileValidation = function () {
  if (inputMobile.value === "") {
    spans[2].innerText = "you should enter your Mobile";
    spans[2].style.color = "red";
    return false;
  } else if (isNaN(inputMobile.value)) {
    spans[2].innerText = "you should enter Numbers only";
    spans[2].style.color = "red";
    inputMobile.value = "";
    return false;
  } else {
    spans[2].innerText = "";
    return true;
  }
};
var genderValidation = function () {
  if (inputGender.value === "") {
    spans[3].innerText = "you should select your Gender";
    spans[3].style.color = "red";
    return false;
  } else {
    spans[3].innerText = "";
    return true;
  }
};
var addressValidation = function () {
  if (inputAddress.value === "") {
    spans[4].innerText = "you should enter your Address";
    spans[4].style.color = "red";
    return false;
  } else {
    spans[4].innerText = "";
    return true;
  }
};
