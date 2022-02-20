let signup_user=localStorage.getItem("signup_user")||[];

document.querySelector("#signup_sub").addEventListener("click",store);
function store(e){
    e.preventDefault();
    let first=document.querySelector("#f_name").value
    let last=document.querySelector("#l_name").value
    let email=document.querySelector("#sign_email").value
    let username=document.querySelector("#sign_username").value
    let password=document.querySelector("#sign_password").value
    let data={
        email:email,
        password:password,
    }
    signup_user.push(data);
    localStorage.setItem("signup_user",JSON.stringify(signup_user));
}