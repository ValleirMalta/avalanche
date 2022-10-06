import React,{useState} from 'react';
import './App.css';
import SelectPer from './Component/selectPersonalizado'

function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loadFruta, seTLaodfruta ] = useState(true);
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [loadSector, ] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [valorCampo, setValorSelecionado] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [valorCampoDois, setValorSelecionadoDois] = useState("");

  const listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
  
  const OptionOuter =     [
      "CLT", "Sócio", "Diretor Estatutário", "Estágio", "Aprendiz", "Trabalhador Autônomo", "Trabalhador Voluntário", "Trabalhador Temporário", "Trabalhador Rural", "Pessoa Jurídica", "Contrato Intermitente", "Contrato por Tempo Determinado", "Teletrabalho"
  ]

  const myChangeHandler = event => {

    let nam = event.target.name;
    let val = event.target.value;
    console.log(val)


    if(nam === 'Frutas') {
      setValorSelecionado({ ...valorCampo,  val });
      seTLaodfruta(false)
    } else if(
      nam === 'nomeSector'
    ) {
      setValorSelecionadoDois({ ...valorCampoDois,  val });

    }
  }
  return (
    <div className="App">
     <h1>Começo de tudo</h1>
     <SelectPer option={listaDeFrutas} loadError={loadFruta} valorCampo={valorCampo} nameCampo="Frutas" myChangeHandler={myChangeHandler} />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <SelectPer option={OptionOuter}  valorCampo={valorCampoDois} nameCampo="nomeSector" myChangeHandler={myChangeHandler}/>
    </div>
  );
}

export default App;
