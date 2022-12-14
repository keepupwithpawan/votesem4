var setID="ASAP123";
var setPass="password123";

function checkIDandPassword(){
    var strEmail=document.getElementById("emailtext").value;
    var strPass=document.getElementById("passtext").value;

    if(strEmail==setID && strPass==setPass){
    window.location= "http://127.0.0.1:5500/results.html";
    }
    else{
        alert("Wrong ID or Password");
    }
}