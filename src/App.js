import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }

  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

const fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit-32)*5/9
}

  return (
    <div className='app'>
      <div className='search'>
        <input
          className='search__input'
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder='enter location'
          onKeyPress={searchLocation}
          type='text'
        />
      </div>

      {data.name !== undefined &&
        <div className='container'>
          <div className='top'>
            <div className='weather__title'>
              <p>{data.name}</p>
            </div>
            <div className='weather__temp'>
              {data.main ? <h1>{fahrenheitToCelsius(data.main.temp).toFixed()}°</h1> : null}
            </div>
            <div className='weather-info__description'>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          <div className='weather-info'>
            <div className='weather-info__feels'>
              {data.main ? <p className='bold'>{fahrenheitToCelsius(data.main.feels_like).toFixed()}°</p> : null}
              <p>fells like</p>
            </div>
            <div className='weather-info__humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>humidity</p>
            </div>
            <div className='weather-info__wind'>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
              <p>wind speed</p>
            </div>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
