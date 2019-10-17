import React from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import WeatherInfo from './components/WeatherInfo';

const api_key = "28d681e0e39e05fab60e5154a8b1fca4";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      zipcode: 0,
      temperature: 0,
      humidity: 0, 
      conditions: "",
      error: ""
    }
  }

  getWeatherAPI = async(e) => {
    const zipcode = e.target.elements.zipcode.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip={zipcode}&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);
    if(zipcode) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        humidity: response.main.humidity,
        conditions: response.weather[0].description,
        error: ""
      })
      console.log(this.state.temperature);
    } else {
      this.setState({
        error: "Please enter a zip code"
      })
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Form loadWeather={this.getWeatherAPI}/>
        <WeatherInfo>
          city={this.state.city}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          conditions={this.state.conditions}
          error={this.state.error}
        </WeatherInfo>
      </div>
    )
  }
}

export default App;
