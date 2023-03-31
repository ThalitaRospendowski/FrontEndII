const Button = document.querySelector('button');
const elementEmail    = document.querySelector('#inputEmail');
const elementPassword = document.querySelector("#inputPassword");


var formErrors={
    inputEmail:true,
    inputPassword:true
}


checkFormValidity()

function validateEmail(email) {

  const mailFatherRef = email.parentElement;

  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    formErrors.inputEmail = false;
    mailFatherRef.classList.remove('error');
    
  } else {
    console.log('Retorna false')
    // mailFatherRef.classList.add('error');
    formErrors.inputEmail = true;
    mailFatherRef.classList.add('error');
  }
  checkFormValidity()
}


function validatePassword(password) {
  const passwordFatherRef = password.parentElement;

  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/.test(password.value)){
    formErrors.inputPassword = false;
    passwordFatherRef.classList.remove('error');
  } else{
    formErrors.inputPassword = true;
    passwordFatherRef.classList.add('error');
  }
  checkFormValidity()
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
    

    if (inputValid) {
        elementFatherRef.classList.remove('error')
    }

    else {
        elementFatherRef.classList.add('error')

    }

    checkFormValidity();

}

function authUser(event) {

  checkFormValidity();
   
  event.preventDefault()

  //Dados para ser enviado a API
  const userLoginData = {
    email: elementEmail.value,
    password: elementPassword.value
  }


  console.log(userLoginData)

  const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  var requestConfig = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(userLoginData)
  }

  fetch(`https://todo-api.ctd.academy/v1/users/login`,requestConfig).then(
      response => {
      if(response.ok) {
        response.json().then(
          token => {
            localStorage.setItem('authToken',token.jwt)
            console.log(token)
            Button.disabled = true;
            window.location.href = "tarefas.html";
          }
        )

      }else {
        alert('erro');
      }
    }
  )
}



elementEmail.addEventListener('keyup',(event) => validateEmail(elementEmail));
elementPassword.addEventListener('keyup',(event) => validatePassword(elementPassword));
Button.addEventListener('click', (event) => authUser(event));
