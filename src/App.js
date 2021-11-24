import './App.css';
import AppBody from './components/AppBody';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react';
import firebase from './config/firebaseConfig'

function App() {

  useEffect(() => {
    const messaging = firebase.messaging()
    // messaging.requestPermission().then
    Notification.requestPermission().then(() => {
      return messaging.getToken()
    }).then((token) => {
      console.log('Token: ', token);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute  exact path='/' component={AppBody} />
          <Route  exact path='/signup' component={Signup} />
          <Route  exact path='/login' component={Login} />
          <Route  exact path='/resetpassword' component={ForgotPassword} />
        </Switch>
    </div>

    </Router>
    
  );
}

export default App;
