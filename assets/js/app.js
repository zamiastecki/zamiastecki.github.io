

    // Get elements
    const txtEmail =    document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin =    document.getElementById('btnLogin');
    const btnSignUp =   document.getElementById('btnSignUp');
    const btnLogout =   document.getElementById('btnLogout');
    
    btnLogin.addEventListener('click', function(){
  document.getElementById("test").innerHTML = "Hello World";
});
    btnLogin.addEventListener('click', e => {
        //get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        console.log(auth.signInWithEmailAndPassword(email, pass));
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
