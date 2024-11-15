import './App.css';
import TextoColorido from './Components/TextoColorido';
import BotaoAlerta from './Components/BotaoAlerta';

function App() {
  return (
    <div className="App">
      <p><TextoColorido text="Primeiro Teste" color='blue' /></p>
      <p><TextoColorido text="Esse é o segundo experimento" color='red' /></p>
      <p><TextoColorido text="E aqui é o último texto" color='green' /></p>

      <BotaoAlerta label="Baixar CV" />

    </div>
  );
}

export default App;
