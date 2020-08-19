import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact'
import Navigation from './components/navigation/Navigation'
import Alert from './components/alert/Alert'
function App() {
    return (
      <div className="App">

        <Navigation />
        
        <Switch>
          <Route
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
          <Route component={Alert}/>

        </Switch>
      </div>
    )
  }


export default App
