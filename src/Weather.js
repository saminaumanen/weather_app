import React, { Component } from 'react';

class Weather extends Component {
  render(){

    return(

        <div>
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
        </div>
    )
}
}

export default Weather;