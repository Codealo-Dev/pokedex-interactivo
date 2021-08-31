import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para ver cambios.
        </p>
        <a
          className="App-link"
          href="https://codealo.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende con Codealo
        </a>
      </header>
    </div>
  );
}

export default App;
