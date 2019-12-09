import React, { Component } from "react";

class SearchWeather extends Component {
  render(){

    return(
            <form onSubmit = {this.props.searchWeather}>
                <input type="text" id="city" placeholder="City..."/><br></br>
                <button id="searchButton">Search</button>
            </form>
    )
}
}

export default SearchWeather;