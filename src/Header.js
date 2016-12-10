import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

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
              
              Wealth Key
            
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
          <Link to="welcome">
            <a 
              className="
                mdl-navigation__link
              "
              href="
                #
              "
            >

             Home

            </a>
            </Link>
            <Link to="/">
            <a 
              className="
                mdl-navigation__link
              "
              href="
                #
              "
            >

              Sign Out
              
            </a>
          </Link>
          </nav>
        </div>
      </div>
    )
  }
}


export default Header;