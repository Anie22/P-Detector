import './App.css';
import { Route, Routes} from 'react-router-dom'
import { Login } from './auth/security/login';
import { ResetPass } from './auth/update/forgetPass'
import { VerifyCode } from './auth/update/codeVerify';
import { UpdatePass } from './auth/update/updatePass';
import { SignUp } from './auth/security/register';
import { Home } from './home/contents/home';
import { Demo } from './home/forms/demo';
import { Outsource } from './home/forms/outsource';
import { ResetVerification } from './auth/verify/resetPassVerify';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/book-demo' element={ <Demo /> }></Route>
          <Route path='/outsource' element={ <Outsource /> }></Route>
          <Route path='/login' element={ <Login /> }></Route>
          <Route path='/register' element={ <SignUp /> }></Route>
          <Route path='/reset-password' element={ <ResetPass /> }></Route>
          <Route path='/reset-password/verify' element={ <VerifyCode /> }></Route>
          <Route path='/reset-password/update' element={ <UpdatePass /> }></Route>
          <Route path='/resetver/:encodedCode/' element={ <ResetVerification /> }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
