const elementUser = document.querySelector('#user') 
const elementTask = document.querySelector('#novaTarefa')
const elementAdd  = document.querySelector('#buttonAdd')
const elementTaskHtml = document.querySelector('#task-pendentes')
const elementConcHtml = document.querySelector('#task-concluidas')



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
               getTasks()
            } else {
                if (response.status === 401) {
                    logout()
                }

            }
        }
      )

}

function creatTask(){

    console.log(taskData)

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
                        console.log(data)
                    }
                )
            }
            else{
                console.log('error')
            }
        }

    )
}


function alterTask(){

    console.log(taskData)

    debugger

    taskData.completed = true

    var requestConfig = {
        method: 'PUT',
        headers: requestHeaders,
        body: JSON.stringify(taskData)
    }  

    

    fetch('https://todo-api.ctd.academy/v1/tasks', requestConfig).then (
        response => {
            if (response.ok){                
                  response.json().then(
                    data =>{
                        console.log(data)
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


        if (task.completed){

            elementConcHtml.innerHTML += `
            <li class="tarefa">
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
        <li class="tarefa">
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

        console.log(taskData)
        getTasks()
    }
}

/*function PegarDadosTask (){
    elementTaskHtml.innerHTML += `
      <li class="tarefa">
        <div class="not-done"></div>
        <div class="descricao">
          <p class="nome">${taskData.description}</p>
          <p class="timestamp">${taskData.completed}</p>
        </div>
      </li>
   
    `
}*/

function pegarDadosTasks(event) {

    

    taskData.description  = event;

    console.log(taskData.description)
}

checkIfAuthTokenExist();

elementTask.addEventListener('keyup', (event) => pegarDadosTasks(event.target.value))
elementAdd.addEventListener('click', (event) => creatTask(event));

