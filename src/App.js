import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Rules from './components/league/Rules'
import Fixtures from './components/league/Fixtures'
import AddResult from './components/results/AddResult'



class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/rules' component={Rules} />
          <Route path='/fixtures' component={Fixtures} />
          <Route path='/results' component={AddResult} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
