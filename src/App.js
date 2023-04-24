import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='weather__title'>
            <p>Dnepr</p>
          </div>
          <div className='weather__temp'>
            <h1>17º</h1>
          </div>
          <div className='weather-info__description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='weather-info'>
          <div className='weather-info__feels'>
            <p className='bold'>19º</p>
            <p>fells like</p>
          </div>
          <div className='weather-info__humidity'>
            <p className='bold'>90%</p>
            <p>humidity</p>
          </div>
          <div className='weather-info__wind'>
            <p className='bold'>20mph</p>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
