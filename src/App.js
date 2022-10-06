import './App.css';
import SelectPer from './Component/selectPersonalizado'

function App() {

  const listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
  
  const OptionOuter =     [
      "CLT", "Sócio", "Diretor Estatutário", "Estágio", "Aprendiz", "Trabalhador Autônomo", "Trabalhador Voluntário", "Trabalhador Temporário", "Trabalhador Rural", "Pessoa Jurídica", "Contrato Intermitente", "Contrato por Tempo Determinado", "Teletrabalho"
  ]
  return (
    <div className="App">
     <h1>Começo de tudo</h1>
     <SelectPer option={listaDeFrutas}/>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <SelectPer option={OptionOuter}/>
    </div>
  );
}

export default App;
