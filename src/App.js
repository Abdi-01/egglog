import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ManageErrlog from './pages/errlogManagement';

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={ManageErrlog} exact />
      </Switch>
    </div>
  )
}

export default App;
