import "bootstrap/dist/css/bootstrap.min.css";
import Admin from './Component/Admin';
import Nav from './Component/Nav';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import PartyDetail from './Component/PartyDetail';
import Candidate from './Component/Candidate';
import Election from './Component/Election';
import Home from './Component/Home';
import Result from './Component/Result';
import PendingVoterId from "./Component/PendingVoterId";
import User from './Component/User';
import RequiredAuth from './Component/RequiredAuth'
import { BrowserRouter, Route,  Routes} from "react-router-dom";

const ROLES = {
  'User' : 'USER',
  'Admin' : 'ADMIN',
  'Officer' : 'OFFICER',
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Public routes */}
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>

          <Route element={<RequiredAuth allowedRoles={ROLES.User} />}>
            <Route exact path='/user' element={<User />}></Route>
          </Route>

          <Route element={<RequiredAuth allowedRoles={ROLES.Admin} />}>
            <Route exact path='/admin' element={<Admin />}></Route>
            <Route exact path='/addparty' element={<PartyDetail />}></Route>
            <Route exact path='/addcandidate' element={<Candidate />}></Route>
            <Route exact path='/addelection' element={<Election />}></Route>
            <Route exact path='/result' element={<Result />}></Route>
            <Route exact path='/pending' element={<PendingVoterId />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
