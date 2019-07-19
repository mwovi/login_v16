firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("login_field").style.display = "initial";
        document.getElementById("signin_field").style.display = "none";
    } else {
        document.getElementById("login_field").style.display = "none";
        document.getElementById("signin_field").style.display = "initial";
    }
});






function myFunction() {

    var useremail = document.getElementById("email_div").value;
    var userpass = document.getElementById("pass_div").value;

}