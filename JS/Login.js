/*const signupform = document.querySelector('#signupform');

signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const contraseña = document.querySelector('signup-password').value;

    auth
        .createUserWithEmailAndPassword(email,contraseña)
        .then(userCredential =>{

            //Limpiar el formulario
            signupform.reset();

            //Cerrar el modal

                console.log('sign-up')
        })
})
*/
//Singin

const signinForm = document.querySelector('#loginform');
signinForm.addEventListener('submit', e =>{
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const contraseña = document.querySelector('signup-password').value;
    console.log(email, contraseña)

    auth
    .signInWithEmailAndPassword(email,contraseña)
    .then(userCredential =>{

        //Limpiar el formulario
        signupform.reset();
    })
})

//Google Login
const googleButton = document.querySelector('#googleLogin')
googleButton.addEventListener('click', e =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopUp(provider)
        .then(result =>{
            console.log('google sign in')
        })
        .catch(err =>{
            console.log(err)
        })
})

//Facebook Login
const facebookButton = document.querySelector('#facebookLogin')
facebookButton.addEventListener('click',e =>{
    e.preventDefault();

   const provider = new firebase.auth.FacebookAuthProvider();
   auth.signInWithPopup(provider)
   .then(result =>{
    console.log('google sign in')
    })
    .catch(err =>{
        console.log(err)
    })
})


//Applelogin
const AppleButton = document.querySelector('#AppleButton')
AppleButton.addEventListener('click',e =>{
    e.preventDefault();

   const provider = new firebase.auth.AppleAuthProvider();
   auth.signInWithPopup(provider)
   .then(result =>{
    console.log('google sign in')
    })
    .catch(err =>{
        console.log(err)
    })
})
