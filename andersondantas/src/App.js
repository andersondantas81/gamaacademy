import "./App.css";

var nome = prompt("Qual o seu nome ?", "Digite seu nome");
var idade = prompt("Qual o sua idade ?", "Digite sua idade");
var email = prompt("Qual o seu email ?", "Digite seu email");
mensagem();

function mensagem() {
  alert("Olá meu nome é " + nome+ ", tenho "+idade+" anos e meu email é "+email);
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
