import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <header className='header'>
          <div className='header__title'>
            <p>Dnepr</p>
          </div>
        </header>
        <div className='weather-info'>
          <div className='weather-info__temp'>
            <h1>17º</h1>
          </div>
          <div className='weather-info__description'>
            <p>Clouds</p>
          </div>
          <div className='weather-info__feels'>
            <p>19º</p>
          </div>
          <div className='weather-info__humidity'>
            <p>90%</p>
          </div>
          <div className='weather-info__wind'>
            <p>20mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
