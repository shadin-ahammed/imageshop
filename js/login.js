
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    // form.addEventListener('submit', e => {
    //     e.preventDefault();
        
    //     checkInputs();
    // });
    // function checkInputs() {
    //     // trim to remove the whitespaces
    //     const usernameValue = username.value.trim();
    //     const emailValue = email.value.trim();
    //     const passwordValue = password.value.trim();
    //     const password2Value = password2.value.trim();
    //     if(passwordValue === '') {
    //         setErrorFor(password, 'Password cannot be blank');
    //     } else {
    //         setSuccessFor(password);
    //     }
        
    //     if(password2Value === '') {
    //         setErrorFor(password2, 'Confrim Password cannot be blank');
    //     } else if(passwordValue !== password2Value) {
    //         setErrorFor(password2, 'Confrim Password does not match');
    //     } else{
    //         setSuccessFor(password2);
    //     }
    // }
    
    signupBtn.onclick = (()=>{
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    });
    loginBtn.onclick = (()=>{
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    });
    signupLink.onclick = (()=>{
      signupBtn.click();
      return false;
    });