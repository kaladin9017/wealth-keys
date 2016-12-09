import React, { Component } from 'react';
import {
    Header,
    Container,
} from "semantic-ui-react";

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
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">Project Fintech Api Test</Header>
        </div>
        <Container>
          <TabBarContainer tabs={tabs} size='massive' />
       </Container>
      </div>
    );
  }
}

export default App;
