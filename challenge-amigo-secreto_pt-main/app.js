let amigos = [];
let mensagemDeAlerta ='Por favor, insira um nome válido.';
let listaDeAmigos = amigos

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value; 
    if (nomeAmigo == '') {
        return alert(`${mensagemDeAlerta}`);
    }

    amigos.push(nomeAmigo); 
    console.log(amigos);
    limparCampo();
    atualizarListaDeAmigos()

 }
 function limparCampo(){
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
 }

 function atualizarListaDeAmigos(){
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";
    for (let amigo of amigos) {
        let item = document.createElement('li'); 
        item.textContent = amigo; 
        listaDeAmigos.appendChild(item); 
    }
}
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
        if (amigos.length == 0) {
            return resultado.innerHTML = 'Nenhum amigo disponível para sorteio!'; 
            }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML =`Amigo sorteado:${amigoSorteado}`;
    
    atualizarListaDeAmigos()
}
