import welcome from './welcome';
import reverse from './componets/Reverse/Reverse';

import './App.css';

function App() {
  return (
    <div className="App">
            <header className="App-header">
               <p>
          Olá Povo
                  </p>
             <div className="reverse">
              <p> Os textos abaixo são criados pelo componete Reverse</p>
              <Reverse>
                meu texto
              </Reverse>
              <Reverse>
                o meu texto que deve ser invertido
              </Reverse>
             </div>
      </header>
    </div>
  );
}

export default App;
