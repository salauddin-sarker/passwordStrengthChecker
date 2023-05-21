const input = document.querySelector("input"),
 showHide = document.querySelector(".show_hide"),
 indicator = document.querySelector(".indicator"),
iconText = document.querySelector(".icon_text"),
text = document.querySelector(".text");




 
// js code to show hide password
showHide.addEventListener("click", ()=> {
    if(input.type === "password") {
        input.type = "text";
        // confirmPw.type = "text";
        showHide.classList.replace("fa-eye-slash", "fa-eye");
    }else{
        input.type = "password";
        // showHide.type = "password";
        showHide.classList.replace("fa-eye", "fa-eye-slash");
    }
 });



// js code to show password strength (with regex)
let alphabet = /[a-zA-Z]/, // letter a to z and A to Z
    numbers = /[0-9]/, // number
    scharacters = /[!,@, #,$,%,^,&,*,?,_,(,),-,+,=,~]/; // special characters

input.addEventListener("keyup", () =>{
    indicator.classList.add("active");

    let val = input.value;
    if(val.match(alphabet) || val.match(numbers) || val.match(scharacters)){
        text.textContent = "Password is weak";
        iconText.style.color = "#ff6333";
        showHide.style.color = "#ff6333";
        input.style.borderColor = "#ff6333";
    }

    if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
        text.textContent = "Password is midium";
        iconText.style.color = "#cc8500";
        showHide.style.color = "#cc8500";
        input.style.borderColor = "#cc8500";
    }
    if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) && val.length >= 6){
        text.textContent = "Password is strong";
        iconText.style.color = "#22c32a";
        showHide.style.color = "#22c32a";
        input.style.borderColor = "#22c32a";
    }

    if(input.value == ""){
        indicator.classList.remove("active");
        iconText.style.color = "#a6a6a6";
        showHide.style.color = "#a6a6a6";
        input.style.borderColor = "#a6a6a6";
    }
});
