

function valida_campos() {
  var email = document.getElementById('email');
  var senha = document.getElementById('senha');
  var senha2 = document.getElementById('senha2');

  if(email.value === '') {
    alert('Favor informar seu email.');
    email.focus();
    return false;
  }
  if(senha.value === '') {
    alert('Favor informar uma senha.');
    senha.focus();
    return false;
  }
  if(senha2.value === '') {
    alert('Favor informar novamente uma senha.');
    senha2.focus();
    return false;
  }
  if(senha.value !== senha2.value){
    alert('As senha devem ser iguais.');
    document.cadastro.senha2.focus();
    return false;
  }
  alert("Email: "+email.value+" | Senha: "+senha.value+" | Senha2: "+senha2.value);

}