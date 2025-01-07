import './App.css';

function Demo() {
  return (
    <div className="App">
      <div className='App-header'>
        demo
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className='App-header'> hello world
        <Demo />
      </div>

    </div>
  );
}



export default App;
