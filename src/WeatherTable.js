import React, { Component } from "react";

class WeatherTable extends Component {
  render(){

    return(
            <form onSubmit = {this.props.loadWeather}>
                <input type="text" name="city" placeholder="City..."/><br></br>
                <button id="search">Search</button>
            </form>
    )
}
}

export default WeatherTable;