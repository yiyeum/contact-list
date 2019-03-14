import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ListView from './containers/ListView';
import DetailView from './containers/DetailView';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path="/" component={ListView} />
          <Route exact path="/contacts/:id" component={DetailView} />
        </Switch>
      </div>
    );
  }
}

export default App;
