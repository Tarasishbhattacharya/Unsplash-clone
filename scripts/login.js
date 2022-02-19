let login=JSON.parse(localStorage.getItem("validate"));
document.querySelector("#sub").addEventListener("submit",check);
function check(e){
    e.preventDefault();
    let logemail=document.querySelector("#email_value").value
    let logpassword=document.querySelector("#password_value").value
    var flag=false;
    if(logemail==""||logpassword==""){
        alert("You need to fill the details");
    }else{
    for(var i=0;i<login.length;i++){
       if(logemail==login[i].email&&logpassword==login[i].password){
           flag=true;
           alert("login successful")
           break;
       } 
    }
    if(flag==false){
        alert("Invalid credentials")
    }
}

}