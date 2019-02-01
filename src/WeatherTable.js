import React, { Component } from "react";

class WeatherTable extends Component {
  render(){

    return(
            <form onSubmit = {this.props.loadWeather}>
                <input type="text" id="city" placeholder="City..."/><br></br>
                <button id="searchButton">Search</button>
            </form>
    )
}
}

export default WeatherTable;