import React, { Component } from "react";
import './App.css';

class Welcome extends Component {
  render(){
    return(
      <div>

        <div className="welcome-container">
        
          <div className="solutions-buttons">
          
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Button
            </button>

            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Button
            </button>

            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Button
            </button>

            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Button
            </button>

          </div>

        </div>

      </div>
    )
  }
}

export default Welcome;