import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router'
import configureStore from './store/configureStore';
const store = configureStore();
import Login from './Login';
import Welcome from './Welcome';
import Schedule from './Schedule';
import Confirmation from './Confirmation';

// Save a reference to the root element for reuse
const rootEl = document.getElementById('root');

// Create a reuseable render method that we can call more than once
let render = () => {
  // Dynamically import the main App component and render it
  const App = require('./App').default;

  ReactDOM.render(
   <Provider store={store}>
     <Router history={browserHistory}>
       <Route path="/" component={App}>
         <IndexRoute component={Login} />
         <Route path="welcome" component={Welcome} />
         <Route path="schedule" component={Schedule} />
         <Route path="confirm" component={Confirmation} />
       </Route>
     </Router>
   </Provider>,
   rootEl
 );
};

if(module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react').default;
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl,
    );
  }
  // In development, we wrap the rendering function to catch errors,
  // and if something breaks, log the error and render it to the screen
  render = () => {
    try {
      renderApp();
    }
    catch(error) {
      console.error(error);
      renderError(error);
    }
  };
  // Whenever the App component file or one of its dependencies
   // is changed, re-import the updated component and re-render it
   module.hot.accept("./App", () => {
       setTimeout(render);
   });
}

render();
