const elementUser = document.querySelector('#user')
const elementTask = document.querySelector('#novaTarefa')
const elementAdd  = document.querySelector('#buttonAdd')


const authToken = localStorage.getItem('authToken')

const requestHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authToken
  }


  const taskData = {
    description:'',
    completed: false
}  

checkIfAuthTokenExist();


function getUserData(){
    
      var requestConfig = {
        method: 'GET',
        headers: requestHeaders
      }

      fetch('https://todo-api.ctd.academy/v1/users/getMe',requestConfig).then(
        response => {
            if (response.ok) {
               //preencher HTML
               console.log(response)
            } else {
                
                console.log(response)
                if (response.status === 401) {
                    logout()
                }
                //tratar erro

            }
        }
      )

}

function creatTask(){

    console.log('Adicionando Task')
    
    var requestConfig = {
        method: 'POST',
        headers: requestHeaders
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
        }

    )
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
                        console.log(tasks)
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
        console.log('pegou função');
        //getUserData()
        getTasks()
    }
}

function PegarDadosTask (event){
    taskData.description  = event;

    console.log(taskData)
}


elementTask.addEventListener('keyup', (event) => PegarDadosTask(event.target.value))
elementAdd.addEventListener('click', (event) => creatTask(event));