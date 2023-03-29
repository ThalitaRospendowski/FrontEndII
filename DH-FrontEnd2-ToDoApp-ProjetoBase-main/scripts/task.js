const authToken = localStorage.getItem('authToken')

console.log(authToken)


function getUserData(){

    const requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': authToken
      }
    
      var requestConfig = {
        method: 'GET',
        headers: requestHeaders,
        body: JSON.stringify(userLoginData)
      }

      fetch('https://todo-api.ctd.academy/v1/users/getMe',requestConfig).then(
        response => {
            if (response.ok) {
               //preencher HTML
            } else {

                //tratar erro

            }
        }
      )

}


function checkIfAuthTokenExist(){
    if (authToken === null){
        window.location.href = 'index.html'
    } else {
        getUserData()
    }
}