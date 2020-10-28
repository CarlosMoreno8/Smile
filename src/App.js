import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

function App() {


let initialState = null;
try {
  initialState = JSON.parse(localStorage.getItem('client'))
  
} catch (error) {
  console.log (error.message)
  
}

const [user, setUser] = useState(initialState)



  return (
     <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' exact >
          <Login setUser={setUser} />
        </Route>
        <Route path='/register' component={Register} exact />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter >
  );
}

export default App;