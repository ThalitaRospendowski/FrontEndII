const elementUser = document.querySelector('#user') 
const elementTask = document.querySelector('#novaTarefa')
const elementAdd  = document.querySelector('#buttonAdd')
const elementTaskHtml = document.querySelector('#task-pendentes')
const elementConcHtml = document.querySelector('#task-concluidas')
const elementFinish   = document.querySelector('#closeApp')
const elementList     = document.querySelector('#tarefas-pendentes')
const elementItens    = document.getElementsByTagName("li");

const authToken = localStorage.getItem('authToken')

const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authToken
  }

  const taskData = {
    description: '',
    completed: false
}

function getUserData(){
    
      var requestConfig = {
        method: 'GET',
        headers: requestHeaders
      }

      fetch('https://todo-api.ctd.academy/v1/users/getMe',requestConfig).then(
        response => {
            if (response.ok) {
               //preencher HTML
               response.json().then(
                data =>{
                    elementUser.innerHTML = `
                     <p id='user'>${data.firstName} ${data.lastName}</p>
                    `
                    getTasks()
                }

               )
            } else {
                if (response.status === 401) {
                    logout()
                }

            }
        }
      )

}

function creatTask(){

    debugger

    var requestConfig = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(taskData)
    }  




    

    fetch('https://todo-api.ctd.academy/v1/tasks', requestConfig).then (
        response => {
            if (response.ok){                
                  response.json().then(
                    data =>{
                        console.log('Resposta de data:' + data)
                    }
                )
            }
            else{
                console.log('error')
            }
        }

    )

}


function pegarId(event) {

    debugger

    for (let i = 0; i < elementItens.length; i++) {
        // código para ser executado quando o li for clicado
        console.log("Você clicou no item " + (i + 1));
        console.log("Texto do item: " + event.target.innerText);
    };
}


function alterTask(){

    taskData.completed = true
    taskData.description = 'Teste'




    var requestConfig = {
        method: 'PUT',
        headers: requestHeaders,
        body: JSON.stringify(taskData),
        id: '1506'
    }  

    
    fetch('https://todo-api.ctd.academy/v1/tasks/1506', requestConfig).then(
        response => {
            if (response.ok) {
                response.json().then(
                    data => {
                        console.log('Resposta de data:' + data)
                    }
                )
            }
            else {
                console.log('error')
            }
        }

    )
}

function deleteTask(){

    var requestConfig = {
        method: 'DELETE',
        headers: requestHeaders,
        id: '1506'
    }  

    
    fetch('https://todo-api.ctd.academy/v1/tasks/1506', requestConfig).then (
        response => {
            if (response.ok){                
                  response.json().then(
                    data =>{
                        console.log('Resposta de data:' + data)
                    }
                )
            }
            else{
                console.log('error')
            }
        }

    )
}

function splitTasks(tasks){

    console.log(tasks)

    tasks.map(task => {

        
        //const dataformat = new Intl.DateTimeFormat('pt-BR').format(task.createdAt)

        if (task.completed){

            elementConcHtml.innerHTML += `
            <li class="tarefa" id = ${task.id}>
              <div class="done"></div>
              <div class="descricao">
                <p class="nome">${task.description}</p>
                <p class="timestamp">Criada em: ${(task.createdAt)}</p>
              </div>
            </li>     
          `

        }

        else{

        elementTaskHtml.innerHTML += `
        <li class="tarefa" id = ${task.id}>
          <div class="not-done"></div>
          <div class="descricao">
            <p class="nome">${task.description}</p>
            <p class="timestamp">Criada em: ${(task.createdAt)}</p>
          </div>
        </li>    
        
        `
      

    }

    })
}

function getTasks() {

    var requestConfig = {
        method: 'GET',
        headers: requestHeaders
    }

    fetch('https://todo-api.ctd.academy/v1/tasks',requestConfig).then (
        response => {
            if (response.ok){
                response.json().then(
                    tasks => {
                        
                        splitTasks(tasks)
                        
                    }
                )
            }
        }
    )

}

function logout() {
    window.location.href = 'index.html'
    localStorage.clear
}

function checkIfAuthTokenExist(){
    if (authToken === null){
        window.location.href = 'index.html'
    } else {
        getUserData()

    }
}

function pegarDadosTasks(event) {   

    taskData.description  = event;

    console.log(taskData.description)
}

checkIfAuthTokenExist();

/*alterTask();

deleteTask()*/

elementTask.addEventListener('keyup', (event) => pegarDadosTasks(event.target.value))
elementAdd.addEventListener('click', (event) => creatTask(event));
elementFinish.addEventListener('click', (event) => logout());
//elementItens.addEventListener("click", (event) => pegarId(event));

