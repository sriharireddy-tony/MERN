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

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="auth/signUp" element={<SignUp/>} />
          <Route path="auth/signIn" element={<SignIn/>} />
          <Route path="/matchPage" element={<MatchPageHeader/>} >
          <Route path="cricket" element={<MatchesList/>} />
          <Route path="kabaddi" element={<MatchListKabaddi/>} />
          <Route path="football" element={<MatchListFootball/>} />
         </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
