import { Route, Routes} from 'react-router-dom';
import { Login } from './auth/security/login';
import { ResetPass } from './auth/update/forgetPass';
import { VerifyCode } from './auth/update/codeVerify';
import { UpdatePass } from './auth/update/updatePass';
import { SignUp } from './auth/security/register';
import { Home } from './home/home';
import { Maintainance } from './components/maintainance';
import { Missing } from './components/missing';
import { UserDashboard } from './dashboard/students/userDashboard';
import { EmailMsg } from './auth/security/emailVerification';
import { LecturerDashboard } from './dashboard/lecturer/lecturerDashboard';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/student_dashboard' element={ <UserDashboard /> }></Route>
          <Route path='/lecturer_dashboard' element={<LecturerDashboard />}></Route>
          <Route element={<Maintainance />}>
          </Route>
          <Route path='/login' element={ <Login /> }></Route>
          <Route path='/register' element={ <SignUp /> }></Route>
          <Route path='/reset-password' element={ <ResetPass /> }></Route>
          <Route path='/reset-password/verify' element={ <VerifyCode /> }></Route>
          <Route path='/reset-password/update' element={ <UpdatePass /> }></Route>
          <Route path='/verify-account' element={ <EmailMsg /> }></Route>
          <Route path='*' element={<Missing />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;