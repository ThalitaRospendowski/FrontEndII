let button = document.querySelector('button');
let element = document.querySelector('body');
let elementcard = document.querySelector('#cards');
const form = document.querySelector('form');
const textTitulo = document.querySelector('#titulo')
const erroTitulo = document.querySelector('#errortxt')
const textUrl = document.querySelector('#url')
const textDesc = document.querySelector('#desc')

var personagensData={
    titulo:'',
    url:'',
    descricao:''
}



textTitulo.addEventListener('keyup', (event) => validarTitulo(event));
textUrl.addEventListener('keyup', (event) => validarURL(event));
textDesc.addEventListener('keyup', (event) => validarDescricao(event));
button.addEventListener('click', (event) => cadastrar(event));


function cadastrar(event){
    
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
