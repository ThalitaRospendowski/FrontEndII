const Button = document.querySelector('button');
const elementEmail    = document.querySelector('#inputEmail');
const elementPassword = document.querySelector("#inputPassword");


var formErrors={
    inputEmail:true,
    inputPassword:true
}




//Valida os inputs do formulário
function checkFormValidity(){
    //convert os valores do obejto em array para usar a função every(), disponivel somente para array
    const formErrorsArray = Object.values(formErrors);

    const formValidity = formErrorsArray.every(item => item === false)


    console.log(formErrors);
    Button.disabled = !formValidity
}



function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity();
    const elementFatherRef = inputRef.parentElement;

    console.log(elementEmail);

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

    window.location.href = "tarefas.html";
        
}



elementEmail.addEventListener('keyup',(event) => validateInput(elementEmail));
elementPassword.addEventListener('keyup',(event) => validateInput(elementPassword));
Button.addEventListener('click', (event) => login(event));
