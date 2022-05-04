import React,{useState} from "react";
import "./style.css";

const App = () =>{

  const [valorDigitado, setValorDigitado] = useState(''); 
  const [resultado, setResultado] = useState(0); 
  const [historico, setHistorico] = useState([]);  
  const [operacao, setOperacao] = useState(false); 
  var teclas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Escape', 'Backspace', '.', '(', ')', '/', '*', '-', '+', 'Enter']


  //realizar calculo pelo teclado
  document.onkeydown = function(e) {
    
    for (let i = 0; i < teclas.length; i++){
      if(e.key === teclas[i]) {
        if(teclas[i] === 'Enter') {
          Operacao('=');           
          break;
        }
        if(teclas[i] === 'Escape') {
          reset(); 
          break;
        }
        if(teclas[i] === 'Backspace') {
          let vtela = valorDigitado;
          vtela = vtela.substring(0, (vtela.length-1));
          setValorDigitado(vtela);
          setOperacao(false);
          return;
        }
        acionarDigito(teclas[i]);
      }
    }
  };


  const exibirHistorico = () => {
    const array = historico.toString();
    return (
      alert(
        array.replace(/,/g, "\n")        
      ))
  };

  const Tela = (valor, res) => {   
    if(res === 'ERRO') {
      return (
        <div className="cssTela">
          <input type="submit" className="botao" onClick={exibirHistorico} />
          <span className="cssTelaOper">{valor}</span>
          <span className="cssTelaResVermelho">{res}</span>
          <input type="submit" value="Historico"/>
        </div>
      ) 
    } else {
      return (
    
        <div className="cssTela">
          <input type="submit" className="botao" onClick={exibirHistorico} />
          <span className="cssTelaOper">{valor}</span>
          <span className="cssTelaRes">{res}</span>
        </div>

      )
    }
    
  }

  const Btn = (label, click) => {
    return (
      <button className="cssBtn" onClick={click}>{label}</button>
    )
  }

  const acionarDigito = (d) => {
    //retorna o útimo elemento da expressão
    let expressao = valorDigitado.slice(-1);
    
    if(valorDigitado === '' && (d === '+' || d === '-' || d === '*' || d === '/')){
      setOperacao(false);
      setValorDigitado(resultado+d+resultado);
      return
    }
    if((expressao === '+' || expressao === '-' || expressao === '*' || expressao === '/' ) &&
      (d === '+' || d === '-' || d === '*' || d === '/' ) && 
      valorDigitado.length > 1){
      setOperacao(false);
      setValorDigitado(valorDigitado);
      return
    }

    if((d === '+' || d === '-' || d === '*' || d === '/') && operacao) {
      setOperacao(false);
      setValorDigitado(resultado+d);
      return
    }
    if(operacao) {
      setValorDigitado(d);
      setOperacao(false);
      return
    }
    const valorDigitadoTela = valorDigitado+d;
    setValorDigitado(valorDigitadoTela);
  }

  const reset = () => {
    setOperacao(false);
    setValorDigitado('');
    setResultado(0);
    setHistorico([]);
    return
  }

  const Operacao = (oper) => {

    if(oper === 'bs') {
      let vtela = valorDigitado;
      vtela = vtela.substring(0, (vtela.length-1));
      setValorDigitado(vtela);
      setOperacao(false);
      return;
    }
    try {
      const r = eval(valorDigitado);
      setResultado(r);
      setHistorico([valorDigitado+" = "+r].concat(historico))
      setOperacao(true);
    } catch (error) {
      setHistorico(valorDigitado+"=> ERRO")
      setResultado('ERRO');
    }
  }

  return (
    <>
      <div className="cssConteiner">
        <div className="titulo">
          <img alt="" className="imagem" />
          <h3>Calculadora</h3>
        </div>
        
        {Tela(valorDigitado, resultado)}
        <div className="cssBotoes">
          {Btn('AC', reset)}
          {Btn('(', ()=>acionarDigito('('))}
          {Btn(')', ()=>acionarDigito(')'))}
          {Btn('/', ()=>acionarDigito('/'))}
          {Btn('7', ()=>acionarDigito('7'))}
          {Btn('8', ()=>acionarDigito('8'))}
          {Btn('9', ()=>acionarDigito('9'))}
          {Btn('*', ()=>acionarDigito('*'))}
          {Btn('4', ()=>acionarDigito('4'))}
          {Btn('5', ()=>acionarDigito('5'))}
          {Btn('6', ()=>acionarDigito('6'))}
          {Btn('-', ()=>acionarDigito('-'))}
          {Btn('1', ()=>acionarDigito('1'))}
          {Btn('2', ()=>acionarDigito('2'))}
          {Btn('3', ()=>acionarDigito('3'))}
          {Btn('+', ()=>acionarDigito('+'))}
          {Btn('0', ()=>acionarDigito('0'))}
          {Btn('.', ()=>acionarDigito('.'))}
          {Btn('<-', ()=>Operacao('bs'))}
          {Btn('=', ()=>Operacao('='))}
        </div>
      </div>
    </>
  )
};

export default App;
