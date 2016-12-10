//IMPORTING COMPONENTS
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Confirmation from './Confirmation';

import React, { Component } from 'react';


import TabBarContainer from './features/tabs/TabBarContainer';
import ApiOne from './features/apione/ApiOne';
import ApiTwo from './features/apitwo/ApiTwo';
import ApiThree from './features/apithree/ApiThree';
import ApiFour from './features/apifour/ApiFour';


import './App.css';

// const ApiOne = () => <div>Unit Info content </div>;
// const Pilots = () => <div>Pilots content </div>;
// const Mechs = () => <div>Mechs content </div>;
// const UnitOrganization = () => <div>Unit Organization content </div>;


class App extends Component {

  render() {
    const tabs = [
      {name : 'apione', label : 'Api One Info', component : ApiOne},
      {name : 'apitwo', label : 'Api Two Info', component :ApiTwo },
      {name : 'apithree', label : 'Api Three Info', component : ApiThree},
      {name : 'apifour', label : 'Api Four Info', component : ApiFour}
    ];

    return (
      <div className="site-container">
        <Header />
        <Login />
        {this.props.children}
        
      </div>

     
    );
  }
}

export default App;
