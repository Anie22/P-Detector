import './App.css';
import { Route, Routes} from 'react-router-dom'
import { Login } from './auth/security/login';
import { ResetPass } from './auth/update/forgetPass'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={ <Login /> }></Route>
          <Route path='reset/' element={ <ResetPass /> }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
