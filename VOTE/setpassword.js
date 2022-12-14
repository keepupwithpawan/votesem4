function verifyPassword(){
    var strEmail=document.getElementById("emailtext").value;
    var strPass1=document.getElementById("passtext").value;
    var strPass2=document.getElementById("passtext2").value;

    if(strPass1==strPass2){
    window.location= "http://127.0.0.1:5500/loginpage.html";
    }
    else{
        alert("Passwords do not match");
    }
}
