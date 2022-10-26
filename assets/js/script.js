/*

(Case sensitive)

Formas de acessar o DOM (Document Object Model) pelo Js:

Get por Tag: getElementByTagName() - pega só 1
Get por Id: getElementById() - pega só 1
Get por Nome: getElementsByName() - Elements no plural pq pega mais de 1
Get por Classe: getElementsByClassName() - Elements no plural pq pega mais de 1
Get por Seletor: querySelector() - pega só 1
Get por Seletor: querySelectorAll() - pega todos
***Selector é MAIS USADO porq da pra selecionar tanto só a tag, qnto só o id, qnto só a class***
Exemplo: querySelector('#email') - quando id
querySelector('.email') - quando class


*/

let nome = window.document.getElementById('nome') // "window." é opcional. Como usamos getElementById não precisa da #
let email = document.querySelector('#email') //como email é um id do input na pág contato, chamamos na query com a #
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() { //function usada para q esse evento carregue apenas qndo solicitado (referenciar no input nome)
   let txtNome = document.querySelector('#txtNome')
    if (nome.value.length<=1) {
    txtNome.innerHTML = 'nome inválido'
    txtNome.style.color = 'red'
    } else {
    txtNome.innerHTML = 'nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
}
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
     if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
     txtEmail.innerHTML = 'email inválido'
     txtEmail.style.color = 'red'
     } else {
     txtEmail.innerHTML = 'email válido'
     txtEmail.style.color = 'green'
     emailOk = true
 }
 }

 function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')
     if (mensagem.value.length<=100) {
     txtMensagem.innerHTML = 'você pode digitar até 100 caracteres'
     txtMensagem.style.color = 'green'
     mensagemOk = true
     } else {
     txtMensagem.innerHTML = 'número de caracteres excedido'
     txtMensagem.style.color = 'red'
 }
 }

 function enviar(){
    if (nomeOk = true && emailOk == true && mensagemOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Por favor, preencha o formulário corretamente antes de enviar.')
    }
 }

 function mapaZoom() {
   mapa.style.width = '500px'
   mapa.style.height = '375px'
 }

 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
 }