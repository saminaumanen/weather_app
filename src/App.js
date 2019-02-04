import React, { Component } from 'react';
import Weather from "./Weather";
import SearchWeather from "./SearchWeather";
import './App.css';


const Api_Key = "2518dd9873caf4ea9437d2619e19c1b5";

class App extends Component {
  state = {
    city: "",
    temperature: "",
    description: "",
    icon:"",
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
        icon: "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
      })
    }
  }

componentWillMount(){
  localStorage.getItem('city') && this.setState({
    city:JSON.parse(localStorage.getItem('city')),
    temperature:JSON.parse(localStorage.getItem('temperature')),
    description:JSON.parse(localStorage.getItem('description')),
    icon:JSON.parse(localStorage.getItem('icon')),
    isLoading: false
  })
}


componentWillUpdate(nextProps, nextState){
  localStorage.setItem('city',JSON.stringify(nextState.city));
  localStorage.setItem('temperature',JSON.stringify(nextState.temperature));
  localStorage.setItem('description',JSON.stringify(nextState.description));
  localStorage.setItem('icon',JSON.stringify(nextState.icon));
}


  render() {

    return (
      <div id="weather_container">
          <h1>Search for a city</h1>
            <p>insert city name to see temperature</p>
          <SearchWeather searchWeather={this.getWeather} />
          <Weather
            city={this.state.city}
            temperature={this.state.temperature}
            description={this.state.description}
            icon={this.state.icon} />
      </div>
    )
  }
}

export default App;
