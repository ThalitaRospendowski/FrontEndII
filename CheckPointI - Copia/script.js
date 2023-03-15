const button = document.querySelector('button');
let element = document.querySelector('body');
let elementcard = document.querySelector('#cards');
const form = document.querySelector('form');
const textTitulo = document.querySelector('#titulo')
const textUrl = document.querySelector('#url')
const textDesc = document.querySelector('#desc')
const elementsmall = document.querySelector('.small')

var formErrors={
    titulo:true,
    url:true,
    descricao:true
}


// Função que irá checar se todos os Inputs que temos no formulário estão válidos
function checkFormValidity() {

    // Conversão dos valores do nosso objeto em Array para utilizarmos a função every(), disponivel apenas para arrays
    const formErrorsArray = Object.values(formErrors)
    // Utilização da função every() para checarmos se todos os valores do nosso Array são falsos, caso todos sejam a função every() irá retornar True, mas se apenas um deles for True a função irá retornar False
    const formValidity = formErrorsArray.every(item => item === false)

    // Parte do código onde habilitamos e desabilitamos o botão do Formulário. Precisamos inverter o valor da variavel "formValidity" justamente por conta dela retornar True caso todos os campos sejam falsos, porém, 
    //quando dizemos que o "disabled" do botão é True iremos desabilita-lo. Por isso precisamos inverter esse valor para o botão ser habilitado quando 
    //recebermos True na variavel "formValidity", assim ele irá dizer que o botão não está mais desabilitado
    loginButtonRef.disabled = !formValidity

}

// Função genérica criada para validar qualquer Input que possua a sua validação somente pelo HTML
// Por conta dela ser uma função genérica, ou seja, validar vários Inputs de forma automática, precisamos informar quem será validado pelo parametro "inputRef". Nele iremos precisar fornecer qual é a referencia obtida pelo DOM do input que queremos validar
function validateInput(inputRef) {

    // A função checkValidity() irá verificar se o valor digitado no Input está seguindo as regras que declaramos no Front-end
    console.log(inputRef)
    const inputValid = inputRef.checkValidity()
    // Iremos obter o elemento pai do nosso Input para colocarmos a classe de Erro quando necessário
    const elementFatherRef = inputRef.parentElement

    // Verificação para saber se o Input é valido ou não
    if(inputValid) {

        // Adição de classe de erro no elemento pai do Input para exibirmos a estilização e mensagem de erro
        console.log("False: " + elementFatherRef);
        elementFatherRef.classList.remove('.error')

    } else {

        // Remoção de classe de erro no elemento pai do Input para escondermos a estilização e mensagem de erro
        console.log("True: " + elementFatherRef);
        elementFatherRef.classList.add('.error')

    }

    // Ponto muito importante do nosso script, onde automatizamos o processo de inserção de dados dentro do nosso objeto de erros do formulário chamado "formErrors". Ele está construído dessa maneira justamente para atender todos os Inputs que nós tivermos dentro da Aplicação.
    // A ideia aqui é que baseado no Id do campo que informamos no parametro "inputRef" o script seja capaz de atualizar a chave do objeto "formErrors" que tenha o mesmo nome que o Id. Para que isso seja possível nos precimos colocar "[]" após o nome do nosso objeto e logo após isso informarmos uma String para que a atualização do valor seja possível, nesse caso o Id do Input.
    // Então no caso do Input de E-mail que possuí o Id igual a "userEmail", o script atualizará dentro do objeto a chave que tiver o mesmo nome que o Id.
    // Levando esse mesmo exemplo do Input de E-mail em consideração, isso -> formErrors[inputRef.id] = !inputValid <- é a mesma coisa que isso -> formErrors.userEmail = !inputValid <- porém de uma forma que se aplique para todos os Inputs que precisarmos
    formErrors[inputRef.id] = !inputValid
    // O valor do "inputValid" é invertido aqui justamente porque o nosso objeto "formErrors" serve como referencia para sabermos qual Input do nosso formulário está Invalido e qual não está. Então nesse caso onde o "inputValid" irá retornar True para quando o Input estiver válido e False para quando estivar inválido, teremos que inverter esse Booleano para que faça sentido com o contexto do nosso objeto "formErrors", que no caso é dizer quem possuí erro como True e quem não possuí como False.
    // Se não fizessemos essa inversão "!inputValid" teriamos um cenário onde um Input dentro do "formErrors" seria inválido porém o valor dele seria True, o que não faria sentido no nosso cenário.

    // Chamada para executar nossa função que valida o formulário como um todo e vê se o botão de Prosseguir pode ser habilitado ou não
    checkFormValidity()

}

// Função de Login que será disparada após o usuário clickar no botão
function login(event) {

    // Utilização do preventDefault() para impedirmos o recarregamento da página

    event.preventDefault()

    //

}





textTitulo.addEventListener('keyup', (event) => validateInput(textTitulo));
textUrl.addEventListener('keyup', (event) => validateInput(textUrl));
textDesc.addEventListener('keyup', (event) => validateInput(textDesc));
button.addEventListener('click', (event) => login(event));


/*function cadastrar(event){
    
    event.preventDefault();
    if (personagensData.titulo == "" ) {
        console.log('Não preenchido');
        erroTitulo.addClass('.errorVisible');

    }
    console.log(personagensData);

}


function validarTitulo(event){
    personagensData.titulo = event.target.value;
    

}

function validarURL(event){
    personagensData.url = event.target.value;
}

function validarDescricao(event){
    personagensData.descricao = event.target.value;
}
*/



const personagens = [
    {
        Titulo:'aaaaaaaaaaaaaaaaaaaaaa',
        URL:'/imgs/img01.jpg',
        Descricao:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'

    },
    {
        Titulo:'aaaaaaaaaaaaaaaaaaaaaa',
        URL:'/imgs/img01.jpg',
        Descricao:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'

    },
    {
        Titulo:'aaaaaaaaaaaaaaaaaaaaaa',
        URL:'/imgs/img01.jpg',
        Descricao:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'

    },       
    {
        Titulo:'aaaaaaaaaaaaaaaaaaaaaa',
        URL:'/imgs/img01.jpg',
        Descricao:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddfsdgdgggdgdgdgdgdfg'

    },    
    {
        Titulo:'aaaaaaaaaaaaaaaaaaaaaa',
        URL:'/imgs/img01.jpg',
        Descricao:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'

    },    
    {
        Titulo:'aaaaaaaaaaaaaaaaaaaaaa',
        URL:'/imgs/img01.jpg',
        Descricao:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbDSFSDFSDFSFSFSFFFFFFFSFDFSFSFSFSFSFSFSFSFDSFSFSF'

    },                 
]

console.log(elementcard);


for(let personagem of personagens){
    elementcard.innerHTML += `
    <div class="card">
       <div class="card-header">
           <img src="${personagem.URL}" class="card-img"/>
       </div>
       <div class="card-body">
           <h2 class="card-titulo">${personagem.Titulo}</h2>
           <p class="card-texto">
               ${personagem.Descricao}
            </p>
        </div>
    </div> `

}
