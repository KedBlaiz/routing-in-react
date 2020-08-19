import React, { Component } from 'react'
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact'
import Navigation from './components/navigation/Navigation'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />
        <Switch>
          <Route
            exact
            path='/welcome/:name'
            render={(props) => <Welcome {...props} name={props.match.params.name} />}
          />

          <Route
            exact
            path='/'
            render={(props) => <Welcome {...props} name='Kedersen' />}
          />

          <Route
            path='/Clock' component={Clock} />
          <Route
            path='/Contact' component={Contact} />

        </Switch>
      </div>
    )
  }
}

export default App
