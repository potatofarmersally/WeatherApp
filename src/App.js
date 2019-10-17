import React from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import WeatherInfo from './components/WeatherInfo';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: undefined,
      temperature: undefined,
      humidity: undefined, 
      conditions: undefined,
      error: undefined
    }
  }

  //try it with axios calls next? 
  getWeatherAPI = async (e) => {
    const zipcode = e.target.elements.zipCode.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=28d681e0e39e05fab60e5154a8b1fca4&units=imperial`);
    const response = await api_call.json();
    if(zipcode) {
      this.setState({
        location: response.name,
        temperature: response.main.temp,
        humidity: response.main.humidity,
        conditions: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please enter a zip code"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="col-xs-5 title-container">
          <Title />
        </div>
        <div className="col-xs-7 form-container">
          <Form loadWeather={this.getWeatherAPI}/>
        </div>
        <WeatherInfo
          city={this.state.location}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          conditions={this.state.conditions}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
