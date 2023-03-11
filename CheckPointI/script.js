let button = document.querySelector('button');
let element = document.querySelector('body');
let elementcard = document.querySelector('#cards');
const form = document.querySelector('form');
const textTitulo = document.querySelector('titulo')
const textUrl = document.querySelector('url')
const textDesc = document.querySelector('desc')


button.addEventListener('click',testebotao);

textTitulo.addEventListener('onkeydown',validateTitulo)

function testebotao(){
    console.log("Teste botão");
}


function validateTitulo(){
    console.log("Teste titulo");

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
