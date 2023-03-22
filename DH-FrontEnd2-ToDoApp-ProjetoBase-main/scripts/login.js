/*const Button = document.querySelector('button');
const elementEmail    = document.querySelector('#inputEmail');
const elementPassword = document.querySelector("#inputPassword");


var formErrors={
    inputEmail:true,
    inputPassword:true
}



function validateEmail(email) {

    const mailFatherRef = email.parentElement;

    console.log('Validade Email')

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        //console.log('Retorna True')
        //mailFatherRef.classList.remove('error');
        return true;
        
    }
    console.log('Retorna false')
       // mailFatherRef.classList.add('error');
        return false;
        
  }


//Valida os inputs do formulário
function checkFormValidity(){

    console.log(formErrors);

    //convert os valores do obejto em array para usar a função every(), disponivel somente para array
    const formErrorsArray = Object.values(formErrors);

    const formValidity = formErrorsArray.every(item => item === false)

    Button.disabled = !formValidity
}



function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity();
    const elementFatherRef = inputRef.parentElement;

      console.log(formErrors);
    

    if (inputValid) {
        elementFatherRef.classList.remove('error')
    }

    else {
        elementFatherRef.classList.add('error')

    }

    console.log(inputRef.id);

    if (inputRef.id = inputEmail) {

        console.log('valida email');

        formErrors[inputRef.id] = validateEmail(elementEmail);


    }

    else

    formErrors[inputRef.id] = !inputValid;

    checkFormValidity();

}

function login(event) {

    console.log('Botão Login');

    event.preventDefault()

    window.location.href = "tarefas.html";
        
}
//elementEmail.addEventListener('keyup',(event) => validateEmail(elementEmail));
elementEmail.addEventListener('keyup',(event) => validateInput(elementEmail));
elementPassword.addEventListener('keyup',(event) => validateInput(elementPassword));
Button.addEventListener('click', (event) => login(event));*/

const inputEmailRef = document.querySelector('#inputEmail');
const inputPasswordRef = document.querySelector('#inputPassword');
const btnSubmitRef = document.querySelector('button');

const formErrors = {
  email: true,
  password: true
};

function checkFormValidity() {
  const formErrorsArray = Object.values(formErrors);
  const formValidity = formErrorsArray.every(item => item === false);
  console.log(formValidity);
  btnSubmitRef.disabled = formValidity;
}

function validateEmail() {
  const emailValid = inputEmailRef.checkValidity();
  const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (emailValid && regex.test(inputEmailRef.value)) {
    inputEmailRef.parentElement.classList.remove('error');
    formErrors.email = false;
  } else {
    inputEmailRef.parentElement.classList.add('error');
    formErrors.email = true;
  }
  checkFormValidity();
}

function validatePassword() {
  const passwordValid = inputPasswordRef.checkValidity();
  const regex = /^(?=.[0-9])(?=.[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  if (passwordValid && regex.test(inputPasswordRef.value)) {
    inputPasswordRef.parentElement.classList.remove('error');
    formErrors.password = false;
  } else {
    inputPasswordRef.parentElement.classList.add('error');
    formErrors.password = true;
  }
  checkFormValidity();
}

function checkLogin(e) {
  e.preventDefault();
}

inputEmailRef.addEventListener('keyup', validateEmail);
inputPasswordRef.addEventListener('keyup', validatePassword);

btnSubmitRef.addEventListener('click', checkLogin);

