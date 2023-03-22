const elementButton     = document.querySelector('button');
const elementName       = document.querySelector('#inputNome');
const elementSobrenome  = document.querySelector('#inputSobrenome');
const elementEmail      = document.querySelector('#inputEmail');
const elementPassword   = document.querySelector('#inputPassword');
const elementPasswordConf = document.querySelector("#inputPasswordConf");


var formErrors={
    inputNome:true,
    inputSobrenome:true,
    inputPassword:true,
    inputPasswordConf:true
}




//Valida os inputs do formulário
function checkFormValidity(){
    //convert os valores do obejto em array para usar a função every(), disponivel somente para array
    const formErrorsArray = Object.values(formErrors);

    const formValidity = formErrorsArray.every(item => item === false)


    console.log(formErrors);
    elementButton.disabled = !formValidity
}



function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity();
    const elementFatherRef = inputRef.parentElement;

    console.log("validadeInput");

    if (inputValid) {
        elementFatherRef.classList.remove('error')
    }

    else {
        elementFatherRef.classList.add('error')

    }


    formErrors[inputRef.id] = !inputValid;

    checkFormValidity();

}

function login(event) {

    console.log('Botão Login');

    event.preventDefault()

    window.location.href = "login.html";
        
}



elementName.addEventListener('keyup',(event) => validateInput(elementName));
elementSobrenome.addEventListener('keyup',(event) => validateInput(elementSobrenome));
elementEmail.addEventListener('keyup',(event) => validateInput(elementEmail));
elementPassword.addEventListener('keyup',(event) => validateInput(elementPassword));
elementPasswordConf.addEventListener('keyup',(event) => validateInput(elementPasswordConf));
elementButton.addEventListener('click', (event) => login(event));
