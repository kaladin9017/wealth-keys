import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return(
      <div
        className="
          header-margin
          mdl-layout
          mdl-js-layout
          mdl-layout--fixed-header
        "
      >
        
        <header 
          className="
            mdl-layout__header
          "
        >
          
          <div
            className="
              mdl-layout__header-row
            "
          >
            
            <span
              className="
                mdl-layout-title
              "
            >
              
              Wealth Bridge
            
            </span>

          </div>

        </header>

        <div
          className="
            mdl-layout__drawer
          "
        >

          <nav 
            className="
              mdl-navigation
              "
          >

            <a 
              className="
                mdl-navigation__link
              "
              href="
                #
              "
            >

              Link One

            </a>

            <a 
              className="
                mdl-navigation__link
              "
              href="
                #
              "
            >

              Link Two
              
            </a>

          </nav>
        </div>
      </div>
    )
  }
}


export default Header;