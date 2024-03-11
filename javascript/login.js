function validate() {
    var emailPattern ="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";
    var username = document.getElementById("usern").value;
    var password = document.getElementById("passw").value;
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    error1.innerHTML = "";
    error2.innerHTML = "";
    if (username==""||password=="") {
        alert("Kindly fill the mandatory fields!!");
        return false;
    }
    if (password.length <= 8) {
        error2.innerHTML = "Invalid Password!!!";
        error2.style.color="red";
        return false;
    }
    if (!emailPattern.test(email)) {
        error1.innerHTML = "Please enter a valid email address";
        return false;
    }
    return true;
}



