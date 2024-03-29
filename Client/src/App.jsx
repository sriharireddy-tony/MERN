import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { lazy,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const AuthRouting = lazy(()=> import('./pages/auth/authRouting'));
import Home from './components/home';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn'
import MatchPageHeader from './pages/matchPage/MatchPageHeader';
import MatchesList from './pages/matchPage/MatchesList';
import MatchListKabaddi from './pages/matchPage/matchListKabaddi';
import MatchListFootball from './pages/matchPage/matchListFootball';
import ContestHeader from './pages/contestsList/contestHeader';
import PlayerHeader from './pages/playersPage/playerHeader';
import AdminHome from './pages/admin/AdminHome';
import MatchForm from './pages/admin/matches/MatchForm';
import ContestForm from './pages/admin/contests/ContestForm';
import PlayerForm from './pages/admin/players/PlayerForm';
// import notFound404 from './components/notFound';

import { ProtectRoute } from './utils/ProtectRoute';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth/signUp" element={<SignUp />} />
          <Route path="auth/signIn" element={<SignIn />} />
          <Route path="/matchPage" element={ <MatchPageHeader />} >
            <Route path="cricket" element={ <ProtectRoute><MatchesList /></ProtectRoute> }/>
            <Route path="kabaddi" element={<MatchListKabaddi />} />
            <Route path="football" element={<MatchListFootball />} />
          </Route>
          <Route path="contestList/:_id" element={<ContestHeader />} />
          <Route path="playersList/:_id" element={<PlayerHeader />} />
          <Route path="/admin" element={<AdminHome />}>
            {/* <Route path="home" element={<AdminHome />} /> */}
            <Route path="addMatch" element={<MatchForm />} />
            <Route path="addContest" element={<ContestForm />} />
            <Route path="addPlayers" element={<PlayerForm />} />
          </Route>
          {/* <Route path="/*" element={ <notFound404 /> } /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
