function verify() {
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    var aadhar = document.getElementById("aadhar").value;
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var uppercase = /[A-Z]/.test(password);
    var lowercase = /[a-z]/.test(password);
    var number = /\d/.test(password);
    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneRegex = /^(?:\d{10}|\d{3}[-. ]\d{3}[-. ]\d{4})$/;
    if(email==""||mobile==""||password==""||aadhar=="") {
        alert("Kindly fill all mandatory fields");
        return false;
    }
    if (!emailPattern.test(email)) {
        error1.innerHTML = "Please enter a valid email";
        error1.style.color="red";
        return false;
    }
    if (!phoneRegex.test(mobile)) {
        error2.innerText = "kindly Enter acceptable format:XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
        error2.style.color="red";
        return false;
    }
    if (password.length >= 8 && uppercase && lowercase && number) {
        error3.innerHTML = "Strong Password";
        error3.style.color = "green";
        return false;
    } else if (password.length >= 8 && (uppercase || lowercase) && number) {
        error3.innerHTML = "Medium Password";
        error3.style.color = "orange";
        return false;
    } else {
        error3.innerHTML = "Poor Password,it should be more than 8 character with lower and upper case";
        error3.style.color = "red";
        return false;
    }
}
    
