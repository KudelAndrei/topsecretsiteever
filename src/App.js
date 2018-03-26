import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.css";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
