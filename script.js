function alo() {
    alert('Alo!')
}

function olaNome(nome) {
    alert("Olá" + nome + 'Bem vindo ao curso')  //Concatenação de strings

}

function saudacao() {
    const nome = document.getElementById('nome').value //Pega o texto do input
    if (nome != '') {

        alert('Olá ${nome}. Bem vindo ao curso.') //Interpolação de strings
    } else {
        alert("Informe seu nome.")
        document.getElementById('nome').focus //colocando foco em um elemento
    }
}

function mouseCima(){
    alert ('O mouse está em cima')
}

function mouseSaiu(){
    alert ('O mouse saiu.')
}

function textoMudou(){
    alert('O texto foi alterado')
}

function emFoco(){

    const user = document.getElementById('user')
    user.style.border = '5px solid green'
    user.style.backgroundColor = 'grey'
}

function semFoco(){
    const user = document.getElementById('user')
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white'
}