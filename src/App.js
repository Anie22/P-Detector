import './App.css';
import { BrowserRouter as Routes, Route} from 'react-router-dom'
import { Login } from './auth/security/login';
import { ResetPass } from './auth/update/forgetPass'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={ <Login /> }></Route>
          <Route path='/reset-password' element={ <ResetPass /> }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
