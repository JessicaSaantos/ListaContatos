/* 
        Objetivo: Criar a lista de Contatos

1º Passo: Capturar os valores do formulário
2º Passo: Armazenar esses valores 
3º Passo: Adicionar elementos na interface utilizando os valores 
4º Passo: Remover elementos da interface quando usuário preferir

*/



const listaContato = []
let id = 0

const listaContainer = document.querySelector ('.ListaContatos__lst')
const Nome = document.getElementById ('Nome')
const Email = document.getElementById ('Email')
const Tel = document.getElementById ('Tel')

const btnAdicionar = document.getElementById('btn')

// 1º Passo e 2º Passo

function addNovoContato (){
    const valorNome = Nome.value;
    const valorEmail = Email.value;
    const valorTel = Tel.value;

    const novoContato = {
        id: id,
        nome: valorNome, 
        email: valorEmail, 
        tel: valorTel
    }

    id++;
    listaContato.push (novoContato)

    renderizarLayout()

}

btnAdicionar.addEventListener('click' , addNovoContato)


// 3º Passo 

function renderizarLayout() {
    listaContainer.innerHTML = ''


    if (listaContato.length == 0) {
        listaContainer.innerHTML = '<li><p>Não há contatos na sua lista</p></li>'
    } 
    else {
        for (i = 0 ; i < listaContato.length; i ++){
            criarLayout(listaContato[i])
        }
    }
}

renderizarLayout()


function criarLayout (contato){
const li = document.createElement('li')
const button = document.createElement('button')
const h2 = document.createElement('h2')
const p = document.createElement('p')
const span = document.createElement('span')

button.id = "removerContato"
button.addEventListener ('click' , removerContato)

li.dataset.id = contato.id;
h2.innerText = contato.nome;
p.innerText = contato.email;
span.innerText = contato.tel;

li.appendChild(button)
li.appendChild(h2)
li.appendChild(p)
li.appendChild(span)

listaContainer.appendChild(li)
}


// 4º Passo

function removerContato (e){
        const btnClicado = e.target
        const contatoClicado = btnClicado.parentElement
        const idContatoClick = contatoClicado.dataset.id

        const cntRemovido = listaContato.find ((contato) => contato.id == idContatoClick)  
        const posicaoCntRemovido = listaContato.indexOf(cntRemovido)

        listaContato.splice(posicaoCntRemovido, 1)

        renderizarLayout()
    }


