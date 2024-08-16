do {
    var name = prompt("Please Enter your Name :")
    var validationName = /^[a-zA-Z]+$/.test(name)
} while (name === "" || !validationName)

do {
    var phone = prompt("Please Enter your Phone Number :")
    var validationPhone = /^\d{8}$/.test(phone);
} while (phone === "" || !validationPhone)

do {
    var mobile = prompt("Please Enter your Mobile Number :")
    var validationMobile = /^(010|011|012)\d{8}$/.test(mobile);

} while (mobile === "" || !validationMobile)

do {
    var email = prompt("Please Enter your email :")
    var validationEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
} while (email === "" || !validationEmail)

document.write("Welcome " + name + "<br>");
document.write("Your phone number is: " + phone + "<br>");
document.write("Your mobile number is: " + mobile + "<br>");
document.write("Your email is: " + email + "<br>");
