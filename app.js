let input = document.querySelector(".password");
let show = document.querySelector(".show");


show.addEventListener("click", function(){
    if(input.type === "password"){
        input.type = "text";
        input.style.color = "#1da1f2";
        show.textContent =  "HIDE";
    } else{
        input.type = "password";
        input.style.color = "#111";
        show.textContent =  "SHOW";
    }
})


const signupButton = document.querySelector(".new-user");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const loginButton = document.querySelector(".existing-user");

signupButton.addEventListener("click", func1);
loginButton.addEventListener("click",func2)

function func1 (){
    loginForm.style.display = "none"
    signupForm.style.display = "block"
}

function func2 (){
    signupForm.style.display = "none"
    loginForm.style.display = "block"
    
}








