import React, { Component } from 'react';


class Weather extends Component {
    
  render(){

    return(

        <div id="city_container">
            {
               this.props.city && <p>Location: 
                    <span className="value">  {this.props.city}</span>                    
                </p> 
            }
            
            {
                this.props.temperature && <p>Temperature: 
                    <span className="value">  {this.props.temperature}</span>
                </p>
            }

            {
                this.props.description && <p>Conditions:  
                    <span className="value">  {this.props.description}</span>
                </p>
            }

            {
                this.props.icon && <p><img src={this.props.icon} alt="Weather Icon" /></p>
            }       
            
            {
                this.props.error && <p className="weather__error">{this.props.error}</p>
            }

        </div>
    )
}
}

export default Weather;