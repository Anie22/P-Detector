import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Login } from './auth/security/login';
import { ResetPass } from './auth/update/forgetPass'

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Route path='/' element={ <Login /> }></Route>
          <Route path='/reset-password' element={ <ResetPass /> }></Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
