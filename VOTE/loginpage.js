var setEmail="user@example.com";
var setPass="password123";

function checkEmailandPassword(){
    var strEmail=document.getElementById("emailtext").value;
    var strPass=document.getElementById("passtext").value;

    if(strEmail==setEmail && strPass==setPass){
    window.location= "http://127.0.0.1:5500/votingscreen.html";
    }
    else{
        alert("Wrong Email or Password");
    }
}