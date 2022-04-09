function processa_nome() {
  var super_nome = document.getElementById("inserir_nome").value;
  var nomes;

  if (super_nome) {
    var list_nomes = document.getElementById("lista").innerHTML;
    list_nomes = list_nomes + "<li>" + super_nome + "</li>";
    document.getElementById("lista").innerHTML = list_nomes;
    document.getElementById("inserir_nome").focus();
    inserir_nome.value = "";
    
    var listaNomes = document.getElementById("listaNomes").innerHTML;
        
    listaNomes = listaNomes +" "+ super_nome;
  
    document.getElementById("listaNomes").innerHTML = listaNomes;
    
    return;
  }
  alert("Favor inserir um nome.");
  document.getElementById("lista").focus();
}
