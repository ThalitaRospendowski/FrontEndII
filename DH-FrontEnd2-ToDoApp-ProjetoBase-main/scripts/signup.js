const elementButton     = document.querySelector('button');
const elementName       = document.querySelector('#inputNome');
const elementSobrenome  = document.querySelector('#inputSobrenome');
const elementEmail      = document.querySelector('#inputEmail');
const elementPassword   = document.querySelector('#inputPassword');
const elementPasswordConf = document.querySelector("#inputPasswordConf");


var formErrors={
    inputNome:true,
    inputSobrenome:true,
    inputEmail:true,
    inputPassword:true,
    inputPasswordConf:true
}


//Validadndo o campo senha com 8 caracteres, sendo Maiuscula, Minuscula, Números e caracter especial
function validatePassword(password) {
    const passwordFatherRef = password.parentElement;
  
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/.test(password.value)){
      formErrors.inputPassword = false;
      passwordFatherRef.classList.remove('error');
      checkFormValidity();
    } else{
      formErrors.inputPassword = true;
      passwordFatherRef.classList.add('error');
    }
  }


  function validateEmail(email) {

    const mailFatherRef = email.parentElement;
  
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
      formErrors.inputEmail = false;
      mailFatherRef.classList.remove('error');
      checkFormValidity();
  
    } else {
      console.log('Retorna false')
      // mailFatherRef.classList.add('error');
      formErrors.inputEmail = true;
      mailFatherRef.classList.add('error');
      return false;
    }
  }

  function validateRePassword(rePassword){
    const rePasswordFatherRef = rePassword.parentElement;
    if (elementPassword.value === rePassword.value){
        formErrors.inputPasswordConf = false;
        rePasswordFatherRef.classList.remove('error');
        checkFormValidity();
    } else{
        formErrors.inputPasswordConf = true;
        rePasswordFatherRef.classList.add('error');
    }

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

    event.preventDefault()

    console.log('Função login')


    var userData = {
      firstName: elementName.value,
      lastName: elementSobrenome.value,
      email: elementEmail.value,
      password: elementPassword.value
    }

   /*userData.Nome       =  elementName.value;
    userData.Sobrenome  = elementSobrenome.value;
    userData.Email      =  elementEmail.value;
    userData.Password   = elementPassword.value;


    
    /*alert(userData.Nome);
    alert(userData.Sobrenome);
    alert(userData.Email);
    alert(userData.Password);*/


    console.log(userData.value);


    const requestHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    var requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(userData)
    }

    fetch(`https://todo-api.ctd.academy/v1/users`,requestConfig).then(
      response => {
        if (response.ok){

          alert('Usuario cadastrado com sucesso')
        } else{
          alert('Erro ao cadastrar usuario')

        }
        
        
      }
    )



    /*window.location.href = "index.html";*/
        
}



elementName.addEventListener('keyup',(event) => validateInput(elementName));
elementSobrenome.addEventListener('keyup',(event) => validateInput(elementSobrenome));
elementEmail.addEventListener('keyup',(event) => validateEmail(elementEmail));
elementPassword.addEventListener('keyup',(event) => validatePassword(elementPassword));
elementPasswordConf.addEventListener('keyup',(event) => validateRePassword(elementPasswordConf));
elementButton.addEventListener('click', (event) => login(event));
