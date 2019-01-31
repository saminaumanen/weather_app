import React, { Component } from 'react';
import Weather from "./Weather";
import WeatherTable from "./WeatherTable";
import './App.css';


const Api_Key = "2518dd9873caf4ea9437d2619e19c1b5";

class App extends Component {
  state = {
    city: "",
    temperature: "",
    description: ""
  }

  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if(city ){
      this.setState({
        city: response.name,
        temperature: response.main.temp,
        description: response.weather[0].description,
      })
    }
  }

  render() {

    return (
      <div class="container" id="weather_container">
          <h1>Search for a city</h1>
            <p>insert city name to see temperature</p>
          <WeatherTable loadWeather={this.getWeather} />
          <Weather
            city={this.state.city}
            temperature={this.state.temperature}
            description={this.state.description} />
      </div>
    )
  }
}
export default App;
