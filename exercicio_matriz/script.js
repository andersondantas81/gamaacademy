var lista = [];
var cont = 0;
var nome = '';
var idade = '';

function incluirRegistro() {
    
  nome = document.getElementById('idNome').value;
  idade = document.getElementById('idIdade').value;

  if (nome) {
    lista[cont] = nome+" | "+idade;
    cont++;
  }

}

function exibir(){
  var list_nomes = document.getElementById("lista").innerHTML;
  for(var i = 0; i < lista.length; i++){    
    list_nomes = list_nomes + "<li> Nome :" + nome +" | Idade: "+idade+ "</li>";
  }
  document.getElementById("lista").innerHTML = list_nomes;
}
