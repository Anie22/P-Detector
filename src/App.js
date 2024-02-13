import './App.css';
import { Route, Routes} from 'react-router-dom'
import { Login } from './auth/security/login';
import { ResetPass } from './auth/update/forgetPass'
import { VerifyCode } from './auth/update/codeVerify';
import { UpdatePass } from './auth/update/updatePass';
import { SignUp } from './auth/security/register';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={ <Login /> }></Route>
          <Route path='register' element={ <SignUp /> }></Route>
          <Route path='reset-password' element={ <ResetPass /> }></Route>
          <Route path='reset-password/verify' element={ <VerifyCode /> }></Route>
          <Route path='reset-password/update' element={ <UpdatePass /> }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
