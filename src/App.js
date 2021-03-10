import './App.css';
import AppBody from './components/AppBody';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="app">
      <Signup />
      <Login />
      <ForgotPassword />
      <AppBody />
    </div>
  );
}

export default App;
